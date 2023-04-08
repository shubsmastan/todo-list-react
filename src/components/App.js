import React, { Component } from "react";
import Header from "./Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.sayHi = this.sayHi.bind(this);
  }

  sayHi() {
    alert("Hello world! Welcome to my React app.");
    console.log(`You clicked on ${this.constructor.name}`);
  }

  render() {
    return <Header title="React App" />;
  }
}
