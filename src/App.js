import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./containers/HomeContainer";
import ChatRoom from "./pages/chatRoom";
import HomeContainer from './containers/HomeContainer';

class App extends React.Component {
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
              <ChatRoom {...locationProps} username={this.state.username} room={this.state.room}/>
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
