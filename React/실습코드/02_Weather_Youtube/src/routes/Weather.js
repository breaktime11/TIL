import React, { Component } from 'react';

import SearchBarWeather from '../weather/containers/search_bar';
import WeatherList from '../weather/containers/weather_list';

export default class Weather extends Component {
  render() {
    return (
      <div>
        <SearchBarWeather />
        <WeatherList />
      </div>
    );
  }
}