import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

export type Exercise = { id: string; name: string; sets: number; reps: number; weight: number; completed: boolean };
export type Workout = { id: string; name: string; date: string; notes: string; exercises: Exercise[] };
export type Measurement = { id: string; date: string; weight: string; chest: string; waist: string; biceps: string; shoulder: string };

type GymContextValue = {
  workouts: Workout[];
  measurements: Measurement[];
  ready: boolean;
  addWorkout: (workout: Omit<Workout, 'id'>) => void;
  toggleExercise: (workoutId: string, exerciseId: string) => void;
  addMeasurement: (measurement: Omit<Measurement, 'id'>) => void;
};

const GymContext = createContext<GymContextValue | null>(null);
const STORAGE_KEY = '@gympro-data';

const starterWorkouts: Workout[] = [
  { id: 'starter-1', name: 'Chest + Triceps', date: '2026-07-24', notes: 'Focused on controlled reps.', exercises: [
    { id: 'bench', name: 'Bench press', sets: 4, reps: 12, weight: 60, completed: true },
    { id: 'incline', name: 'Incline dumbbell press', sets: 4, reps: 10, weight: 22, completed: true },
    { id: 'fly', name: 'Cable fly', sets: 3, reps: 15, weight: 18, completed: false },
  ] },
  { id: 'starter-2', name: 'Leg day', date: '2026-07-21', notes: '', exercises: [
    { id: 'squat', name: 'Barbell squat', sets: 4, reps: 8, weight: 80, completed: true },
    { id: 'rdl', name: 'Romanian deadlift', sets: 3, reps: 10, weight: 60, completed: true },
  ] },
];

export function GymProvider({ children }: PropsWithChildren) {
  const [workouts, setWorkouts] = useState<Workout[]>(starterWorkouts);
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored) {
        const data = JSON.parse(stored) as { workouts?: Workout[]; measurements?: Measurement[] };
        setWorkouts(data.workouts ?? starterWorkouts);
        setMeasurements(data.measurements ?? []);
      }
      setReady(true);
    }).catch(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ workouts, measurements }));
  }, [workouts, measurements, ready]);

  const value = useMemo(() => ({
    workouts, measurements, ready,
    addWorkout: (workout: Omit<Workout, 'id'>) => setWorkouts((current) => [{ ...workout, id: String(Date.now()) }, ...current]),
    toggleExercise: (workoutId: string, exerciseId: string) => setWorkouts((current) => current.map((workout) => workout.id !== workoutId ? workout : { ...workout, exercises: workout.exercises.map((exercise) => exercise.id === exerciseId ? { ...exercise, completed: !exercise.completed } : exercise) })),
    addMeasurement: (measurement: Omit<Measurement, 'id'>) => setMeasurements((current) => [{ ...measurement, id: String(Date.now()) }, ...current]),
  }), [workouts, measurements, ready]);

  return <GymContext.Provider value={value}>{children}</GymContext.Provider>;
}

export function useGym() {
  const context = useContext(GymContext);
  if (!context) throw new Error('useGym must be used inside GymProvider');
  return context;
}
