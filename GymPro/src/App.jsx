import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Workouts from './pages/Workouts.jsx';
import AddWorkout from './pages/AddWorkout.jsx';
import Progress from './pages/Progress.jsx';
import Measurements from './pages/Measurements.jsx';

const links = [['/', 'Dashboard'], ['/workouts', 'Workouts'], ['/add-workout', 'Add workout'], ['/progress', 'Progress'], ['/measurements', 'Measurements']];
export default function App() { return <div className="app-shell"><aside className="sidebar"><NavLink to="/" className="brand">GYM<span>PRO</span></NavLink><p className="tagline">Train. Track. Progress.</p><nav>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav><p className="sidebar-note">Your data stays in this browser.</p></aside><main><Routes><Route path="/" element={<Dashboard />} /><Route path="/workouts" element={<Workouts />} /><Route path="/add-workout" element={<AddWorkout />} /><Route path="/progress" element={<Progress />} /><Route path="/measurements" element={<Measurements />} /></Routes></main></div>; }
