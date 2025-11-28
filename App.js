import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Keyboard, SafeAreaView, StyleSheet, ScrollView } from "react-native";

import { DEFAULT_CITY } from "./src/constants";
import { searchWeather } from "./src/services/weatherService";
import { Header, SearchCard, WeatherResult, HelperText } from "./src/components";

export default function App() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    Keyboard.dismiss();
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const weatherData = await searchWeather(city);
      setWeather(weatherData);
    } catch (err) {
      const message =
        err?.message === "Cidade não encontrada."
          ? err.message
          : err?.message || "Erro inesperado. Tente novamente.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <SearchCard
          city={city}
          onCityChange={setCity}
          onSearch={handleSearch}
          loading={loading}
          error={error}
        />
        <WeatherResult weather={weather} />
        {!weather && !error && !loading && <HelperText />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1221",
    paddingHorizontal: 20,
  },
  content: {
    paddingVertical: 32,
    gap: 18,
  },
});
