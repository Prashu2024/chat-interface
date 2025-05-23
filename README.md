# Chat Interface with Plugin System

A chatbot interface that supports plugin-style tools for enhanced functionality. Users can interact using natural language or slash commands to get dynamic responses from various plugins.

---

## Setup and Running Instructions

### Prerequisites

- Node.js (v18+)
- npm (v9+)
- OpenWeatherMap API key (free tier)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prashu2024/chat-interface.git
   cd chat-interface
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```
   VITE_WEATHER_KEY=ADD_YOUR_API
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Deployment

```bash
npm run build
npm start
```

---

## Plugin Architecture

### Core Components

1. **Plugin Interface**  
   Each plugin implements:
   - `name`: Unique plugin identifier  
   - `pattern`: Regex for command detection  
   - `execute`: Logic for processing requests  
   - `render`: Component for displaying results  

2. **Plugin Manager**  
   - Registers plugins during initialization  
   - Handles command routing  
   - Manages plugin execution order  

3. **Command Parser**  
   - Checks for exact slash commands  
   - Falls back to NLP patterns  
   - Includes error handling pipeline  

---

## Implemented Plugins

1. **Weather Plugin**
   - **Command**: `/weather [city]`  
   - **API**: [OpenWeatherMap](https://openweathermap.org/api)  
   - **Features**:
     - Real-time temperature  
     - Humidity levels  
     - Weather conditions  

2. **Calculator Plugin**
   - **Command**: `/calc [expression]`  
   - **Library**: [math.js](https://mathjs.org/)  
   - **Features**:
     - Basic arithmetic  
     - Percentage calculations  
     - Exponent support  

3. **Dictionary Plugin**
   - **Command**: `/define [word]`  
   - **API**: [Free Dictionary API](https://dictionaryapi.dev/)  
   - **Features**:
     - Word definitions  
     - Part-of-speech tagging  

---

## Folder Structure

```
src/
├── components/      # React components
├── plugins/         # Plugin implementations
├── store/           # Zustand state management
├── utils/           # Command parser
├── App.jsx          # Root component
└── main.jsx         # Entry point
```
