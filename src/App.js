import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from "./pages/home";
import ChatRoom from "./pages/chatroom";

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
          <Route path="/" component={Home}/>
          <Route path="/chatroom" component={ChatRoom}/>
        </Switch>
      </div>
    );
  }
}

export default App;
