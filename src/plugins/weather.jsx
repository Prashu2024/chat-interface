import axios from 'axios';

export default {
  name: 'weather',
  // pattern: /^\/weather\s+(\w+)/i,
  pattern: /^\/weather\s+(.+)/i,
  execute: async ([, city]) => {
    const API_KEY = import.meta.env.VITE_WEATHER_KEY; 
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    // const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`);
    return {
      type: 'plugin',
      pluginName: 'weather',
      pluginData: {
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      },
    };
  },
  render: ({ temp, humidity, description }) => (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h3 className="font-bold">Weather Report</h3>
      <p>Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Conditions: {description}</p>
    </div>
  ),
};