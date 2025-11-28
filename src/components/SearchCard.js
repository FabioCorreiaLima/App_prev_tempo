import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";

export const SearchCard = ({ city, onCityChange, onSearch, loading, error }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Cidade</Text>
      <TextInput
        placeholder="Ex.: Maricá, Rio de Janeiro"
        placeholderTextColor="#cbd5e1"
        value={city}
        onChangeText={onCityChange}
        onSubmitEditing={onSearch}
        style={styles.input}
        returnKeyType="search"
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={onSearch}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#0f172a" />
        ) : (
          <Text style={styles.buttonText}>Buscar</Text>
        )}
      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  label: {
    color: "#cbd5e1",
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  button: {
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: "700",
  },
  error: {
    color: "#fca5a5",
    fontSize: 14,
    marginTop: 4,
  },
});

