import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart.jsx'
import GoogleMap from '../components/google-map.jsx'

class WeatherList extends React.Component {

  renderWeather(cityData){
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)

    // const lon = cityData.city.coord.lon
    // const lat = cityData.city.coord.lat
    // Factoring lon and lat constansts
    const { lon, lat } = cityData.city.coord


    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="green" units="K"/></td>
        <td><Chart data={pressures} color="red" units="hPa"/></td>
        <td><Chart data={humidity} color="orange" units="%"/></td>
      </tr>
    )
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return { weather: state.weather } // equals to { weather : weather}
}

export default connect(mapStateToProps)(WeatherList)
