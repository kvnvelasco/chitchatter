import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import "CLASS NAME" from ""
import "CLASS NAME" from ""

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="1stPage">
          <p>
            LOG IN 
          </p>
        </NavLink>

        <NavLink to="2ndPage">
          <p>
            CHAT ROOM 
          </p>
        </NavLink>

        <Switch>
          <Route path="/1stPage" component={"COMPONENT NAME HERE"}/>
          <Route path="/2ndPage" component={"COMPONENT NAME HERE"}/>
        </Switch>
      </div>
    );
  }
}

export default App;
