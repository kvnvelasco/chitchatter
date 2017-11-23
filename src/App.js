import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from "./pages/home";
import ChatRoom from "./pages/chatroom";

class App extends Component {
  state = {
    username: "",
    room: ""
  }

  login = (username, room) => {
    this.setState({username, room})
  }

  render() {
    console.log('app', this.state)
    return (
      <div className="App">
        <ul className="nav nav-list">

        <li>
        <NavLink to="/">
        <Route exact path ="/" render={(locationprops) => (<div>LOG IN</div>)} />
        <Route path ="/chatroom" render={(locationprops) => (<div>LOG OUT</div>)} />
        </NavLink>
        </li>

        <li>
        <NavLink to='ChatRoom'>
          CHAT ROOM 
        </NavLink>
        </li>

        </ul>
        <Switch>
          <Route path="/chatroom" render={(locationProps) => (
            <ChatRoom {...locationProps} 
              username={this.state.username} 
              room={this.state.room}/>
          )}/>
          <Route path="/" render={(locationProps) => (
            <Home {...locationProps} login={this.login}/>
        )}/>
        </Switch>
                </div>  
    );
  }
}

export default App;
