# P2 - App de Previsão do Tempo

Aplicativo mobile desenvolvido em React Native com Expo que consulta a API pública do Open-Meteo e exibe dados meteorológicos em tempo real para qualquer cidade do mundo.

## 📱 Sobre o Projeto

Este aplicativo permite aos usuários buscar informações climáticas atualizadas de qualquer cidade através de uma interface simples e intuitiva. O app utiliza a API Open-Meteo, que não requer chave de autenticação, facilitando o desenvolvimento e uso.

### Funcionalidades

- 🔍 Busca de clima por nome da cidade
- 🌡️ Exibição de temperatura em Celsius
- 💨 Velocidade do vento em m/s
- 🌤️ Descrição do clima com emojis
- ⚡ Interface responsiva e moderna
- 🎨 Design dark mode

### Características Técnicas

- Arquitetura modular com componentes reutilizáveis
- Separação de responsabilidades (services, utils, components)
- Tratamento de erros robusto
- Estados de loading e feedback visual
- Validação de entrada do usuário

## 🛠️ Tecnologias

- React Native com Expo
- Fetch API para requisições HTTP
- Arquitetura modular com componentes

## Requisitos

- Node.js 18+ e npm instalados
- Expo Go (app) ou emulador Android/iOS

## Instalação

1. Instalar dependências:
   ```bash
   npm install
   ```

2. Iniciar o app:
   ```bash
   npm start
   ```
   - Pressione `w` para web, `a` para Android ou `i` para iOS

## 🚀 Como usar

1. Digite o nome da cidade (ex.: `Maricá, Rio de Janeiro`)
2. Toque em **Buscar** ou pressione Enter
3. Visualize os dados meteorológicos:
   - 🌡️ Temperatura atual em Celsius
   - 🌤️ Condição do tempo com descrição e emoji
   - 💨 Velocidade do vento em m/s
   - 📍 Localização (cidade e país)

## 📁 Estrutura do projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.js       # Cabeçalho
│   ├── SearchCard.js   # Campo de busca
│   ├── WeatherResult.js # Exibição dos dados
│   └── HelperText.js   # Texto de ajuda
├── services/           # Lógica de API
│   └── weatherService.js
├── utils/              # Funções auxiliares
│   └── weatherUtils.js
└── constants/          # Constantes
    └── index.js
```

## ⌨️ Comandos

- `npm start` — inicia o servidor Expo
- `npm run android` — abre no Android
- `npm run ios` — abre no iOS
- `npm run web` — roda no navegador
