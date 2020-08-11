import React, { Component } from "react";
import Header from "../component/Header"
import Footer from "../component/Footer"

export default class AboutMe extends Component
{
  render() {
    return (
      <div>
        <Header title="About Me"/>
        <p> Here goes some text </p>
        <Footer />
      </div>
    );
  }
}
