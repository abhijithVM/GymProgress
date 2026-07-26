import { Tabs, TabList, TabSlot, TabTrigger, TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function AppTabs() {
  return <Tabs><TabSlot style={styles.slot} /><TabList asChild><View style={styles.tabList}>
    <TabTrigger name="home" href="/" asChild><TabButton icon="⌂">Today</TabButton></TabTrigger>
    <TabTrigger name="explore" href="/explore" asChild><TabButton icon="⌁">Progress</TabButton></TabTrigger>
  </View></TabList></Tabs>;
}

function TabButton({ children, icon, isFocused, ...props }: TabTriggerSlotProps & { icon: string }) {
  return <Pressable {...props} style={({ pressed }) => [styles.tabButton, pressed && { opacity: 0.7 }]}>
    <Text style={[styles.tabIcon, isFocused && styles.activeText]}>{icon}</Text><Text style={[styles.tabText, isFocused && styles.activeText]}>{children}</Text>
  </Pressable>;
}

const styles = StyleSheet.create({
  slot: { height: '100%' },
  tabList: { position: 'absolute', bottom: 20, alignSelf: 'center', backgroundColor: '#1C3828', borderRadius: 21, flexDirection: 'row', padding: 6, gap: 2, shadowColor: '#112A1A', shadowOpacity: 0.22, shadowRadius: 18, shadowOffset: { width: 0, height: 8 } },
  tabButton: { minWidth: 106, paddingVertical: 10, paddingHorizontal: 14, alignItems: 'center', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', gap: 7 },
  tabIcon: { color: '#92A79A', fontSize: 17, lineHeight: 17 },
  tabText: { color: '#92A79A', fontSize: 12, fontWeight: '800' },
  activeText: { color: '#D7EF5A' },
});
