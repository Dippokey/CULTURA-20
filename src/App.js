import React, { Component} from 'react';
import logo from './logo.jpeg';
import './App.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <section class="header">
                <div class="row">
                   <div class="navbar navbar-default">
                      <div class="container-fluid">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                            <div class="navlogo col-lg-2">
                                <a class="navbar-brand" href="#">Cultura 2020</a>
                            </div>

                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                      <ul className="nav navbar-nav nav-links">
                                        <li><NavLink exact to="/">Home</NavLink></li>
                                        <li><NavLink to="/Events">Events</NavLink></li>
                                        <li><NavLink to="/Contact">Contact</NavLink></li>
                                      </ul>
                            </div>
                      </div>
                 </div>
                 <div className="content">
                     <Route exact path="/" component={Home}/>
                     <Route path="/Events" component={Events}/>
                     <Route path="/Contact" component={Contact}/>
                 </div>
                </div>
        </section>
      <div>



      </div>
    </HashRouter>
    );
  }
}

export default App;
