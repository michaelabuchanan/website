import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./component/App"

// only App goes here on top level
ReactDOM.render(<App />,  document.getElementById('root'));

//                  index
//                    |
//                    V
//                  App.js
//                    |
//                    V
//                  HashRouter (NavLinks in contained Footer component)
//                    |
//                    V
//                  AboutMe.js
