// import React, { Component } from 'react';
// import axios from 'axios';
// class Weather extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       weatherData: null,
//       city: 'New York', // Default city
//     };
//   }
//   componentDidMount() {
//     this.fetchWeather();
//   }
//   fetchWeather = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.meteomatics.com/2024-10-28T00:00:00Z/t_2m:C/52.520551,13.461804/html`
//       );
//       this.setState({ weatherData: response.data });
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };
//   handleCityChange = (e) => {
//     this.setState({ city: e.target.value });
//   };
//   handleSearch = () => {
//     this.fetchWeather();
//   };
//   render() {
//     const { weatherData, city } = this.state;
//     return (
//       <div>
//         <h1>Weather Forecast</h1>
//         <input
//           type="text"
//           value={city}
//           onChange={this.handleCityChange}
//           placeholder="Enter city name"
//         />
//         <button onClick={this.handleSearch}>Search</button>
//         {weatherData ? (
//           <div>
//             <h2>{weatherData.name}</h2>
//             <p>Temperature: {weatherData.main.temp}°C</p>
//             <p>Weather: {weatherData.weather[0].description}</p>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   }
// }
// export default Weather;
"use strict";