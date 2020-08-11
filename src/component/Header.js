import React from "react";
import "../index.css";

export default class Header extends React.Component
{

  render()
  {
    return (
      <span class="align-top"><div class="container-fluid" id="tbox">
        <p id="title">{this.props.title}</p>

      </div></span>
    );
  }
}
