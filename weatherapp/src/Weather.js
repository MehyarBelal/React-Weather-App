import React, { Component } from "react";

export class Weather extends Component {
  constructor(props) {
    super(props);

    setState({ city: "" });
    const api_key = "47ef9ccd2698d5863051758df299be08";
  }

  componentDidCatch() {
    fetch("http://example.com/movies.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div></div>;
  }
}

export default Weather;
