import React, {Component} from 'react';

class Home extends Component{
    state = {
      username: "",
      room: ""
    }
    render(){
      console.log('Home', this.state)
        return(
            <div>
                <div className="logo-title">
                    <img className="App-logo" src="https://image.ibb.co/gvqtiR/logo.png" />
                    <p className="app-title">ChitChat</p>
                </div>

                <div className="container">
                    <div className="jumbotron">
                    <p>Join a Chatroom</p>
                    <form>
                        <div className="form-inputs">
                            <input 
                            onChange={(ev) => this.setState({ username: ev.target.value })}
                            type="text" name="username" placeholder="username"/>
                        </div>
                        <br />
                        <div className="form-inputs">
                            <input type="text" name="chatroomname" 
                            onChange={(ev) => this.setState({room: ev.target.value})}
                            placeholder="chatroom-name"/>
                        </div>
                        <br />
                        <input type="submit" name="submit" value="Enter Room" onClick={(e)=>{
                            this.props.history.push('/chatroom')
                            this.props.login(this.state.username, this.state.room)
                            e.preventDefault()
                        }} />
                    </form>
                    </div>
                </div>
                </div>
        )
    }
}

export default Home;