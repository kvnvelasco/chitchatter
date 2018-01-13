import React, { Component } from 'react';
import Home from '../components/Home';


class HomeContainer extends Component {
    state = {
        username: "",
        room: ""
    }

    enterKey = ev => {
        if (ev.key === "Enter") {
            this.props.history.push('/chatroom')
            this.props.login(this.state.username, this.state.room)
        }
    }

    handleChangeUsername = ev => {
        this.setState({username: ev.target.value})
    }

    handleChangeRoom = ev => {
        this.setState({room: ev.target.value})
    }

    handleSubmit = ev => {
        this.props.history.push('/chatroom')
        this.props.login(this.state.username, this.state.room)
        ev.preventDefault()
    }
    
    render() {
        return (
            <Home 
                onChangeUsername={this.handleChangeUsername}
                onChangeRoom={this.handleChangeRoom}
                onSubmit={this.handleSubmit}
                onKeyPress={this.enterKey}
            />
        )
    }
}

export default HomeContainer;

