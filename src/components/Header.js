import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Previsão em tempo real</Text>
      </View>
      <Text style={styles.title}>Previsão do Tempo</Text>
      <Text style={styles.subtitle}>
        Busque pelo nome da cidade e veja temperatura, vento e condição do tempo.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: 8,
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  title: {
    color: "#e2e8f0",
    fontSize: 30,
    fontWeight: "800",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 15,
    lineHeight: 22,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(56,189,248,0.12)",
    borderColor: "rgba(56,189,248,0.3)",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: "#7dd3fc",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
});

