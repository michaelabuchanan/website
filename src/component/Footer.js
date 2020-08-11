import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

export default class Footer extends React.Component
{
  render() {
    return (
      <div>
        <nav>
          <div class="container-fluid" id="fbox">
            <div class="row">
              <div class="col-sm text"><NavLink exact activeClassName="active" to="/aboutme">About Me</NavLink></div>
              <div class="col-sm text"><NavLink exact activeClassName="active" to="/projects">Projects</NavLink></div>
              <div class="col-sm text"><NavLink exact activeClassName="active" to="/todo">To-Do</NavLink></div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
