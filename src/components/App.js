import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

// Key to API
const APIKey = 'ab90379ee46415c54a6743c00d44ca2b';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.value.length === 0) return
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;


      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState(prevState => ({
            err: false,
            date: time,
            city: '',
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: prevState.value,
          }))
        })
        .catch(err => {
          console.log(err)
          this.setState(prevState => {
            return {
              err: true,
              city: prevState.value,
            }
          })
        }
        )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="search-bar">
          <div className="container">
            <Form
              value={this.state.value}
              change={this.handleInputChange}
            />
          </div>
        </div>

        <div className="main-content">
          <div className="container">
            <Result weather={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
