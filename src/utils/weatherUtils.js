export const descriptionForCode = (code) => {
  // Map simplificado para weathercode do Open-Meteo
  const map = {
    0: { text: "Céu limpo", emoji: "☀️" },
    1: { text: "Predomínio de sol", emoji: "🌤️" },
    2: { text: "Parcialmente nublado", emoji: "⛅" },
    3: { text: "Nublado", emoji: "☁️" },
    45: { text: "Nevoeiro", emoji: "🌫️" },
    48: { text: "Nevoeiro", emoji: "🌫️" },
    51: { text: "Garoa leve", emoji: "🌦️" },
    53: { text: "Garoa moderada", emoji: "🌦️" },
    55: { text: "Garoa intensa", emoji: "🌧️" },
    56: { text: "Garoa congelante leve", emoji: "🌧️" },
    57: { text: "Garoa congelante intensa", emoji: "🌧️" },
    61: { text: "Chuva fraca", emoji: "🌧️" },
    63: { text: "Chuva moderada", emoji: "🌧️" },
    65: { text: "Chuva forte", emoji: "🌧️" },
    66: { text: "Chuva congelante leve", emoji: "🌧️" },
    67: { text: "Chuva congelante forte", emoji: "🌧️" },
    71: { text: "Neve fraca", emoji: "❄️" },
    73: { text: "Neve moderada", emoji: "❄️" },
    75: { text: "Neve forte", emoji: "❄️" },
    77: { text: "Granizo", emoji: "🧊" },
    80: { text: "Pancadas isoladas", emoji: "🌦️" },
    81: { text: "Pancadas moderadas", emoji: "🌧️" },
    82: { text: "Pancadas fortes", emoji: "⛈️" },
    85: { text: "Pancadas de neve fracas", emoji: "❄️" },
    86: { text: "Pancadas de neve fortes", emoji: "❄️" },
    95: { text: "Trovoadas", emoji: "⛈️" },
    96: { text: "Trovoadas com granizo leve", emoji: "⛈️" },
    99: { text: "Trovoadas com granizo forte", emoji: "⛈️" },
  };
  return map[code] || { text: "Condição desconhecida", emoji: "🌡️" };
};

