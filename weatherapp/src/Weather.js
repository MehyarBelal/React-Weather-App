import React, { Component } from "react";

export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "paris", temp: "" };
  }

  componentDidMount() {
    const api_key = "47ef9ccd2698d5863051758df299be08";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api_key}`
    )
      .then((res) => res.json())
      .then((json) => this.setState({ city: json.name, temp: json.main.temp }));
  }

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.city);
      console.log(this.state.temp);
    };
    return (
      <div>
        <h1>{this.state.city}</h1>
        <h2>Temp: {this.state.temp}</h2>
        <div>
          <label>Enter City</label>

          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                this.setState({ city: e.target.value });
              }}
              type="text"
              place="Enter City"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Weather;
