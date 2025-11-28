import { View, Text, StyleSheet } from "react-native";

export const WeatherResult = ({ weather }) => {
  if (!weather) return null;

  return (
    <View style={styles.result}>
      <Text style={styles.cityName}>
        {weather.emoji} {weather.name}
        {weather.country ? `, ${weather.country}` : ""}
      </Text>
      <Text style={styles.temperature}>{weather.temp}°C</Text>
      <Text style={styles.description}>{weather.description}</Text>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Vento</Text>
          <Text style={styles.metricValue}>{weather.wind} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 18,
    gap: 6,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  cityName: {
    color: "#e2e8f0",
    fontSize: 20,
    fontWeight: "700",
  },
  temperature: {
    color: "#38bdf8",
    fontSize: 48,
    fontWeight: "800",
  },
  description: {
    color: "#cbd5e1",
    fontSize: 16,
    textTransform: "capitalize",
  },
  metrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  metric: {
    backgroundColor: "#0f172a",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
    minWidth: 90,
  },
  metricLabel: {
    color: "#94a3b8",
    fontSize: 13,
  },
  metricValue: {
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: "700",
  },
});

