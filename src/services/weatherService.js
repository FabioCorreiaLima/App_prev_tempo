import { GEOCODE_URL, WEATHER_URL } from "../constants";
import { descriptionForCode } from "../utils/weatherUtils";

/**
 * Busca coordenadas (lat/lon) de uma cidade pelo nome
 * @param {string} cityName - Nome da cidade
 * @returns {Promise<Object>} Objeto com latitude, longitude, name e country
 */
export const getCityCoordinates = async (cityName) => {
  const response = await fetch(
    `${GEOCODE_URL}?name=${encodeURIComponent(cityName)}&count=1&language=pt`
  );
  const data = await response.json();
  const place = data?.results?.[0];
  
  if (!place) {
    throw new Error("Cidade não encontrada.");
  }
  
  return {
    latitude: place.latitude,
    longitude: place.longitude,
    name: place.name,
    country: place.country,
  };
};

/**
 * Busca dados do clima atual para uma localização
 * @param {number} latitude - Latitude
 * @param {number} longitude - Longitude
 * @returns {Promise<Object>} Dados do clima atual
 */
export const getCurrentWeather = async (latitude, longitude) => {
  const response = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius&windspeed_unit=ms`
  );
  const data = await response.json();
  const current = data?.current_weather;
  
  if (!current) {
    throw new Error("Não foi possível obter o clima agora.");
  }
  
  return current;
};

/**
 * Busca dados completos do clima para uma cidade
 * @param {string} cityName - Nome da cidade
 * @returns {Promise<Object>} Objeto com dados formatados do clima
 */
export const searchWeather = async (cityName) => {
  const trimmed = cityName.trim();
  
  if (!trimmed) {
    throw new Error("Digite o nome da cidade.");
  }
  
  // 1) Obter coordenadas
  const { latitude, longitude, name, country } = await getCityCoordinates(trimmed);
  
  // 2) Obter clima atual
  const current = await getCurrentWeather(latitude, longitude);
  
  // 3) Formatar dados
  const { text, emoji } = descriptionForCode(current.weathercode);
  
  return {
    name,
    country,
    temp: Math.round(current.temperature),
    wind: Math.round(current.windspeed),
    description: text,
    emoji,
  };
};

