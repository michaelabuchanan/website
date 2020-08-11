import React from "react";
import "../index.css";

export default class TopBar extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <span class="align-top"><div class="container-fluid" id="tbox">
      </div></span>
    );
  }
}
