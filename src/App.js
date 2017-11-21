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
        <ul className="nav nav-list">
        <li><NavLink to="/">
            LOG IN 
        </NavLink></li>

        <li><NavLink to='ChatRoom'>
            CHAT ROOM 
        </NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/ChatRoom' component={ChatRoom}/>
        </Switch>
                </div>  
    );
  }
}

export default App;
