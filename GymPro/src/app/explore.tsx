import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const recentSessions = [
  { day: 'MON', title: 'Pull day', duration: '52 min', volume: '7,840 kg', color: '#DDEBC9' },
  { day: 'SAT', title: 'Leg day', duration: '61 min', volume: '10,120 kg', color: '#F2DFC5' },
  { day: 'THU', title: 'Push day', duration: '47 min', volume: '6,980 kg', color: '#D8E6E9' },
];

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>YOUR TRAINING</Text>
        <Text style={styles.title}>Progress</Text>
        <Text style={styles.subtitle}>A look at the work you&apos;re putting in.</Text>

        <View style={styles.streakCard}>
          <View>
            <Text style={styles.streakNumber}>8</Text>
            <Text style={styles.streakLabel}>DAY STREAK</Text>
          </View>
          <View style={styles.streakCopy}>
            <Text style={styles.streakTitle}>You&apos;re building momentum.</Text>
            <Text style={styles.streakBody}>One more workout this week to hit your goal.</Text>
          </View>
          <Text style={styles.streakFlame}>✦</Text>
        </View>

        <Text style={styles.sectionTitle}>Strength trend</Text>
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}><Text style={styles.chartLabel}>BENCH PRESS</Text><Text style={styles.chartValue}>80 kg</Text></View>
          <View style={styles.chartArea}>
            {[48, 67, 59, 76, 72, 88, 100].map((height, index) => <View key={index} style={[styles.bar, { height: `${height}%` }, index === 6 && styles.activeBar]} />)}
          </View>
          <View style={styles.chartFooter}><Text style={styles.chartAxis}>APR 07</Text><Text style={styles.chartGain}>+12.5 kg</Text><Text style={styles.chartAxis}>MAY 12</Text></View>
        </View>

        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Recent workouts</Text><Text style={styles.viewAll}>VIEW ALL</Text></View>
        <View style={styles.sessions}>
          {recentSessions.map((session) => <View key={session.day} style={styles.sessionCard}>
            <View style={[styles.sessionDay, { backgroundColor: session.color }]}><Text style={styles.sessionDayText}>{session.day}</Text></View>
            <View style={styles.sessionInfo}><Text style={styles.sessionTitle}>{session.title}</Text><Text style={styles.sessionMeta}>{session.duration} · {session.volume}</Text></View>
            <Text style={styles.chevron}>›</Text>
          </View>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F3' },
  content: { paddingHorizontal: 20, paddingTop: 23, paddingBottom: 132 },
  eyebrow: { color: '#758078', fontSize: 10, letterSpacing: 1.2, fontWeight: '900', marginBottom: 7 },
  title: { color: '#18241E', fontSize: 34, letterSpacing: -1.1, fontWeight: '800' },
  subtitle: { color: '#77827B', fontSize: 13, marginTop: 4, marginBottom: 24 },
  streakCard: { backgroundColor: '#203F2D', borderRadius: 22, minHeight: 132, padding: 20, flexDirection: 'row', alignItems: 'center', overflow: 'hidden', marginBottom: 28 },
  streakNumber: { color: '#D5EE53', fontSize: 42, fontWeight: '900', lineHeight: 45, letterSpacing: -1.5 },
  streakLabel: { color: '#B2C7B6', fontSize: 9, letterSpacing: 1, fontWeight: '900', marginTop: 2 },
  streakCopy: { flex: 1, marginLeft: 20 },
  streakTitle: { color: '#FFF', fontSize: 15, fontWeight: '800', lineHeight: 20 },
  streakBody: { color: '#C1D0C3', fontSize: 11, lineHeight: 16, marginTop: 5 },
  streakFlame: { position: 'absolute', right: 15, top: -13, color: '#487255', fontSize: 93 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#18241E', letterSpacing: -0.4 },
  chartCard: { backgroundColor: '#FFF', borderRadius: 20, marginTop: 14, padding: 17, borderWidth: 1, borderColor: '#EDEFEA', marginBottom: 29 },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  chartLabel: { color: '#7A857D', fontWeight: '900', fontSize: 10, letterSpacing: 1 },
  chartValue: { color: '#244A2E', fontSize: 16, fontWeight: '900' },
  chartArea: { height: 116, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', borderBottomWidth: 1, borderColor: '#E9EDE8', paddingTop: 19 },
  bar: { width: 22, borderRadius: 6, backgroundColor: '#DCE7D5' },
  activeBar: { backgroundColor: '#4B8543' },
  chartFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  chartAxis: { color: '#9BA39D', fontSize: 9, fontWeight: '700' },
  chartGain: { color: '#4A8740', fontSize: 10, fontWeight: '900' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  viewAll: { color: '#4E7F42', fontWeight: '900', fontSize: 10, letterSpacing: 0.7 },
  sessions: { gap: 9, marginTop: 13 },
  sessionCard: { padding: 13, borderRadius: 16, backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#EDEFEA' },
  sessionDay: { width: 44, height: 44, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  sessionDayText: { color: '#40523F', fontSize: 10, fontWeight: '900', letterSpacing: 0.5 },
  sessionInfo: { flex: 1, marginLeft: 12 },
  sessionTitle: { color: '#26332A', fontSize: 14, fontWeight: '800', marginBottom: 4 },
  sessionMeta: { color: '#828B84', fontSize: 11 },
  chevron: { color: '#809087', fontSize: 27, fontWeight: '300' },
});
