import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function AppTabs() {
  return <NativeTabs backgroundColor="#FFFFFF" tintColor="#345F38" indicatorColor="#E0EDCC">
    <NativeTabs.Trigger name="index"><NativeTabs.Trigger.Label>Today</NativeTabs.Trigger.Label><NativeTabs.Trigger.Icon sf="house" /></NativeTabs.Trigger>
    <NativeTabs.Trigger name="explore"><NativeTabs.Trigger.Label>Progress</NativeTabs.Trigger.Label><NativeTabs.Trigger.Icon sf="chart.line.uptrend.xyaxis" /></NativeTabs.Trigger>
  </NativeTabs>;
}
