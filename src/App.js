import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Chatroom from "./containers/Chatroom";
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  state = {
    username: "",
    room: ""
  }

  login = (username, room) => {
    this.setState({username, room})
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route 
            path="/chatroom" 
            render={(locationProps) => (
              <Chatroom {...locationProps} username={this.state.username} room={this.state.room}/>
            )}
          />
          <Route 
            path="/" 
            render={(locationProps) => (
              <HomeContainer {...locationProps} login={this.login}/>
            )}
          />
        </Switch>
      </div>  
    );
  }
}

export default App;
