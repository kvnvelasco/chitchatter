import React, { Component } from 'react';
import './home.css';
//import CornerImage from '../side-image.png';
import { toasterMessenger } from '../messenger'
import Toaster from '../toaster'


class Home extends Component {
    state = {
        username: "",
        room: ""
    }

    EnterKey = (e) => {
        if (e.key === "Enter") {
            this.props.history.push('/chatroom')
            this.props.login(this.state.username, this.state.room)
        }
    }
    render() {
        return (
            <div className="home">
                <div className="sidebar">
                    <h1>ChitChatter</h1>
                    <div className="user-input">
                        <em>Join a room to get started</em>
                        <strong>Username</strong>
                        <input
                            onChange={(ev) => this.setState({ username: ev.target.value })}
                            type="text" name="username" 
                        />
                        <strong>Room Name</strong>
                        <input type="text" name="chatroomname"
                            onChange={(ev) => this.setState({ room: ev.target.value })}
                            onKeyPress={this.EnterKey} 
                        />
                        <input 
                            id='join-now'
                            type="submit" 
                            name="submit" 
                            value="JOIN ROOM" 
                            onClick={(e) => {
                                this.props.history.push('/chatroom')
                                this.props.login(this.state.username, this.state.room)
                                e.preventDefault()
                            }} 
                        />
                    </div>      
                </div>

                <div className="photo">
                    {/* <img src={CornerImage} /> */}
                </div>
                <Toaster />
            </div>
        )
    }
}

export default Home;

