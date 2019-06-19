import React from 'react'
import Titles from './components/Titles'
import Form from './components/From'
import Weather from './components/Weather'

const API_KEY = "b02249d3a8eff0d2e4d452d5b15ef973"

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    const data = await api_call.json()
    
    if (city && country) {
      console.log(data)
      this.setState({
        tempurature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "Please enter a Valid City & Country"
      })
    } else {
      this.setState({
        error: "Please enter a Valid City & Country"
      })
    }
  } 

  render() {
    return (
      <div>
        <Titles />
        <Form 
          getWeather = {this.getWeather}
        />
        <Weather 
          tempurature = {this.state.tempurature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    )
  }
}

export default App