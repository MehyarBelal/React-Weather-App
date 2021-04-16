import React, { Component } from "react";

export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "Melbourne", temp: "" };
  }

  componentDidMount() {
    const api_key = "47ef9ccd2698d5863051758df299be08";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api_key}`
    )
      .then((res) => res.json())
      .then((json) => this.setState({ name: json.name, temp: json.main.temp }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
        <h2>Temp: {this.state.temp}</h2>
      </div>
    );
  }
}

export default Weather;
