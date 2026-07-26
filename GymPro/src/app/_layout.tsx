import { ThemeProvider, DefaultTheme, DarkTheme } from 'expo-router';
import { useColorScheme } from 'react-native';
import AppTabs from '@/components/app-tabs';
import { GymProvider } from '@/context/workout-context';

export default function RootLayout() { const scheme = useColorScheme(); return <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}><GymProvider><AppTabs /></GymProvider></ThemeProvider>; }
