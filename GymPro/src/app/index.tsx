import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const week = [
  { day: 'M', date: '12', complete: true },
  { day: 'T', date: '13', complete: true },
  { day: 'W', date: '14', complete: true },
  { day: 'T', date: '15', complete: false },
  { day: 'F', date: '16', complete: false },
  { day: 'S', date: '17', complete: false },
  { day: 'S', date: '18', complete: false },
];

export default function HomeScreen() {
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.eyebrow}>WEDNESDAY, MAY 14</Text>
            <Text style={styles.greeting}>Good morning, Alex</Text>
          </View>
          <View style={styles.avatar}><Text style={styles.avatarText}>AM</Text></View>
        </View>

        <View style={styles.weekCard}>
          <View style={styles.weekTitleRow}>
            <Text style={styles.weekTitle}>This week</Text>
            <Text style={styles.weekProgress}>3 of 5 workouts</Text>
          </View>
          <View style={styles.weekDays}>
            {week.map((item, index) => (
              <View key={`${item.day}-${index}`} style={styles.dayColumn}>
                <Text style={[styles.dayLabel, index === 2 && styles.activeDayLabel]}>{item.day}</Text>
                <View style={[styles.dateCircle, index === 2 && styles.todayCircle, item.complete && styles.completeCircle]}>
                  <Text style={[styles.dateText, (index === 2 || item.complete) && styles.activeDateText]}>{item.complete ? '✓' : item.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Today&apos;s workout</Text>
          <Text style={styles.planLabel}>PUSH · 48 MIN</Text>
        </View>

        <View style={styles.workoutCard}>
          <View style={styles.cardAccent} />
          <View style={styles.workoutInfo}>
            <Text style={styles.workoutKicker}>UPPER BODY</Text>
            <Text style={styles.workoutName}>Push day</Text>
            <Text style={styles.workoutMeta}>Chest, shoulders & triceps</Text>
            <View style={styles.exercisePills}>
              <View style={styles.exercisePill}><Text style={styles.exercisePillText}>6 exercises</Text></View>
              <View style={styles.exercisePill}><Text style={styles.exercisePillText}>18 total sets</Text></View>
            </View>
          </View>
          <Text style={styles.cardIcon}>↗</Text>
        </View>

        <Pressable
          onPress={() => setIsWorkoutStarted((value) => !value)}
          style={({ pressed }) => [styles.startButton, pressed && styles.buttonPressed]}>
          <Text style={styles.startButtonText}>{isWorkoutStarted ? 'Workout in progress' : 'Start workout'}</Text>
          <Text style={styles.startButtonIcon}>{isWorkoutStarted ? '✓' : '→'}</Text>
        </Pressable>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Progress snapshot</Text>
          <Text style={styles.periodLabel}>LAST 30 DAYS</Text>
        </View>
        <View style={styles.statsRow}>
          <Metric label="WORKOUTS" value="12" detail="+3 vs last month" trend="↑" />
          <Metric label="VOLUME" value="32.4k" detail="kg lifted" trend="" />
        </View>

        <View style={styles.recordCard}>
          <View style={styles.recordIcon}><Text style={styles.recordIconText}>★</Text></View>
          <View style={styles.recordCopy}>
            <Text style={styles.recordTitle}>New personal record</Text>
            <Text style={styles.recordBody}>Bench press · 80 kg × 5</Text>
          </View>
          <Text style={styles.recordDate}>2d</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Metric({ label, value, detail, trend }: { label: string; value: string; detail: string; trend: string }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricDetail}>{trend ? <Text style={styles.positive}>{trend} </Text> : null}{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F3' },
  content: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 132, gap: 20 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  eyebrow: { color: '#758078', fontSize: 10, fontWeight: '800', letterSpacing: 1.15, marginBottom: 5 },
  greeting: { color: '#18241E', fontSize: 25, fontWeight: '800', letterSpacing: -0.7 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#DDE6CA', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 12, fontWeight: '800', color: '#2C5032' },
  weekCard: { padding: 17, borderRadius: 20, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EDEFEA', gap: 15 },
  weekTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  weekTitle: { color: '#18241E', fontSize: 15, fontWeight: '800' },
  weekProgress: { color: '#77827B', fontSize: 11, fontWeight: '600' },
  weekDays: { flexDirection: 'row', justifyContent: 'space-between' },
  dayColumn: { alignItems: 'center', gap: 8 },
  dayLabel: { color: '#A1A8A3', fontSize: 10, fontWeight: '700' },
  activeDayLabel: { color: '#335E38' },
  dateCircle: { width: 33, height: 33, borderRadius: 17, justifyContent: 'center', alignItems: 'center' },
  todayCircle: { backgroundColor: '#335E38' },
  completeCircle: { backgroundColor: '#DCE9C9' },
  dateText: { color: '#6E7871', fontWeight: '700', fontSize: 12 },
  activeDateText: { color: '#FFF' },
  sectionHeading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 4 },
  sectionTitle: { color: '#18241E', fontSize: 18, fontWeight: '800', letterSpacing: -0.35 },
  planLabel: { color: '#7B877E', fontSize: 10, letterSpacing: 0.6, fontWeight: '800' },
  periodLabel: { color: '#7B877E', fontSize: 10, letterSpacing: 0.6, fontWeight: '800' },
  workoutCard: { minHeight: 163, backgroundColor: '#183D2B', borderRadius: 22, padding: 21, overflow: 'hidden', flexDirection: 'row' },
  cardAccent: { position: 'absolute', width: 170, height: 170, borderRadius: 85, backgroundColor: '#28563D', right: -55, top: -54 },
  workoutInfo: { zIndex: 1 },
  workoutKicker: { fontSize: 10, letterSpacing: 1.15, fontWeight: '800', color: '#B5D18B', marginBottom: 7 },
  workoutName: { color: '#FFF', fontSize: 29, fontWeight: '800', letterSpacing: -0.8 },
  workoutMeta: { color: '#BED0C3', fontSize: 12, marginTop: 5 },
  exercisePills: { flexDirection: 'row', gap: 7, marginTop: 19 },
  exercisePill: { borderRadius: 12, paddingVertical: 6, paddingHorizontal: 9, backgroundColor: 'rgba(255,255,255,0.12)' },
  exercisePillText: { color: '#E7F0E8', fontSize: 10, fontWeight: '700' },
  cardIcon: { color: '#D0E2D3', fontSize: 25, fontWeight: '300', position: 'absolute', right: 19, top: 17 },
  startButton: { height: 55, borderRadius: 17, backgroundColor: '#D3EE52', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 },
  buttonPressed: { opacity: 0.78 },
  startButtonText: { color: '#1B321E', fontWeight: '900', fontSize: 15 },
  startButtonIcon: { color: '#1B321E', fontSize: 19, fontWeight: '800' },
  statsRow: { flexDirection: 'row', gap: 12 },
  metricCard: { flex: 1, backgroundColor: '#FFFFFF', padding: 16, borderRadius: 18, borderWidth: 1, borderColor: '#EDEFEA', minHeight: 110 },
  metricLabel: { color: '#89918B', fontSize: 9, letterSpacing: 1, fontWeight: '900' },
  metricValue: { color: '#1D2C22', fontSize: 27, fontWeight: '800', letterSpacing: -0.8, marginTop: 7 },
  metricDetail: { color: '#7D867F', fontSize: 10, marginTop: 3, fontWeight: '600' },
  positive: { color: '#4E873D', fontWeight: '900' },
  recordCard: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#F0F3E9', borderRadius: 16, padding: 13 },
  recordIcon: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#DFEBBA', alignItems: 'center', justifyContent: 'center' },
  recordIconText: { color: '#587929', fontSize: 16 },
  recordCopy: { flex: 1 },
  recordTitle: { color: '#344137', fontSize: 12, fontWeight: '800', marginBottom: 3 },
  recordBody: { color: '#7A837B', fontSize: 11 },
  recordDate: { color: '#9AA39B', fontSize: 10, fontWeight: '700', alignSelf: 'flex-start', marginTop: 2 },
});
