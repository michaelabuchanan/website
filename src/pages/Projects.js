import React, { Component } from "react";
import Header from "../component/Header"
import Footer from "../component/Footer"
import Posts from "../component/Posts"

export default class Projects extends Component
{
  render() {
    return (
      <div>
        <Header title="Projects" />

        <Posts />

        <Footer />
      </div>
    );
  }
}
