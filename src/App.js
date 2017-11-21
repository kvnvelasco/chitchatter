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
        <NavLink to="/">
          <p>
            LOG IN 
          </p>
        </NavLink>

        <NavLink to="/chatroom">
          <p>
            CHAT ROOM 
          </p>
        </NavLink>

        <Switch>
          <Route path="/chatroom" component={ChatRoom}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
