import { Text, StyleSheet } from "react-native";

export const HelperText = () => {
  return (
    <Text style={styles.helper}>
      Dica: teste com Maricá, Rio de Janeiro ou outra cidade. Não precisa de chave de API.
    </Text>
  );
};

const styles = StyleSheet.create({
  helper: {
    color: "#64748b",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 12,
  },
});

