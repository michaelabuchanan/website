import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import { Route, HashRouter } from 'react-router-dom';
import AboutMe from "../pages/AboutMe"
import Projects from "../pages/Projects"
import ToDo from "../pages/ToDo"
import Gans from "../pages/gans.js"

export default class App extends React.Component {

  render()
  {
    return (
      <div>
        <Header title="Michaela Buchanan" />
        <HashRouter>

          <Footer />
          <div className="content">
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/todo" component={ToDo}/>
            <Route path="/gans" component={Gans}/>
            <Route path="/eclipse" component={Gans}/>
          </div>
        </HashRouter>
      </div>
    );
  }

}
