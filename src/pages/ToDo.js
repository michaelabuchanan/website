import React, { Component } from "react";
import Header from "../component/Header"
import Footer from "../component/Footer"

export default class ToDo extends Component
{
  render() {
    return (
      <div>
        <Header title="To-Do List"  />
        <p> ToDo! </p>
        <Footer />
      </div>
    );
  }
}
