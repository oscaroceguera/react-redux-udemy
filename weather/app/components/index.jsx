import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search-bar.jsx';
import WeatherList from '../containers/weather-list.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
