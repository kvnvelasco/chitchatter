import React, { Component } from 'react';
import './home.css';


class Home extends Component {
    state = {
        username: "",
        room: ""
    }
    render() {
        return (
            <div className="App-header">
                <div className="container">
                    <span>ChitChatter</span>
                    
                    <em>Join a room to get<br />started</em>
    

                    <strong>
                        Username
                        <br />
                    </strong>    
                    <input
                        onChange={(ev) => this.setState({ username: ev.target.value })}
                        type="text" name="username" />
                    <br />

                    <strong>
                        Room Name
                        <br />
                    </strong>
                    <input type="text" name="chatroomname"
                        onChange={(ev) => this.setState({ room: ev.target.value })} />

                    <br />
                    <input type="submit" name="submit" value="JOIN ROOM" onClick={(e) => {
                        this.props.history.push('/chatroom')
                        this.props.login(this.state.username, this.state.room)
                        e.preventDefault()
                    }} />
                </div>

                    <div className="App-PHOTO">
                        <img src="https://files.slack.com/files-tmb/T78PNV5A6-F86QZ96FM-40ca868ee5/joshua-earle-234740_720.png" />
                    </div> 
            </div>
        )
    }
}

export default Home;

