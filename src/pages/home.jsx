import React, { Component } from 'react';
import './home.css';
import CornerImage from '../side-image.png';
import { toasterMessenger } from '../messenger'
import Toaster from '../toaster'


class Home extends Component {
    state = {
        username: "",
        room: ""
    }

    EnterKey = (e) => {
        if(e.key === "Enter"){
            this.props.history.push('/chatroom')
            this.props.login(this.state.username, this.state.room)
        }
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
                        onChange={(ev) => this.setState({ room: ev.target.value })} 
                        onKeyPress={this.EnterKey}/>

                    <br />
                    <input type="submit" name="submit" value="JOIN ROOM" onClick={(e) => {
                        this.props.history.push('/chatroom')
                        this.props.login(this.state.username, this.state.room)
                        e.preventDefault()
                    }} />
                </div>

                    <div className="App-PHOTO">
                        <img src={CornerImage} />
                    </div> 
            </div>
        )
    }
}

export default Home;

