import React, { Component } from 'react';
import Chatbox from '../components/chatbox.js'


class ChatRoom extends Component {

  state = {
    users: [],
    messages: [],
    socket: null,
    display: false
  }

  openAttach = () => {
    this.setState({ display: !this.state.display })
  }

  closeAttach = () => {
    this.setState({ display: false })
  }

  componentWillMount() {


    if (!this.props.username || !this.props.room)
      return this.props.history.replace('/')

    const socket = new WebSocket("ws://188.166.221.63:8000")
    socket.onmessage = this.messageHandler
    socket.onopen = () => {
      this.setState({ socket })
      socket.send(JSON.stringify({
        type: 'join',
        data: {
          username: this.props.username,
          room: this.props.room
        }
      }))
    }
  }

  messageHandler = (socketData) => {

    const data = JSON.parse(socketData.data)
    switch (data.type) {
      case "join_success":
        break;
      case "history":
        this.setState({ messages: data.data.messages })
        if (this.chatNode)
          this.chatNode.scrollTop = this.chatNode.scrollHeight
        break;
      case "members":
        data.data.push(this.props.username + ' (You)')
        this.setState({ users: data.data })
        break;
      case "message":
        this.setState({ messages: this.state.messages.concat([data.data]) })
        if (this.chatNode)
          this.chatNode.scrollTop = this.chatNode.scrollHeight
        break;
      case "joined":
        this.setState({ users: [...this.state.users, data.data.name] })
        this.setState({ messages: [...this.state.messages, { message: `${data.data.name} has entered the room`, author: '' }] })
        break;
      case "left":
        this.setState({ messages: [...this.state.messages, { message: `${data.data.username} has left the room` }] })
        var i = this.state.users.findIndex((currentIndex) => data.data.username === currentIndex)
        this.setState({ users: this.state.users.slice(0, i).concat(this.state.users.slice(i + 1)) })
        break;
    }
  }

  sendMessage = (chat) => {
    this.state.socket.send(JSON.stringify(
      {
        type: 'message',
        data: { message: chat }
      }
    ))

  }


  logOut = () => {
    this.state.socket.send(JSON.stringify(
      {
        type: 'leave',
        data: { username: this.props.username }
      },
      this.props.history.push('/')
    ))
  }



  render() {
    return (
      <div className="main-container" onClick={this.state.display ? this.closeAttach : null} >
        <div className="chatroom-container">
          <div className="header">
            <img src="https://image.ibb.co/gvqtiR/logo.png" className="Applogo2 example-content-secondary" alt="logo" />
            <h1 className="App-title2" >ChitChat</h1>
            {/*<button onClick={this.logOut} className="button-jumbotron">Leave Room</button>*/}
          </div>
          <div className="sidebar">
            <div className="chat-room">
              {this.props.room}
            </div>

            <div className="members users container-fluid">
              {
                this.state.users.map(user => (
                  <p>{user}</p>
                ))
              }
            </div>
          </div>


          <div className="message-container">
            <div className="chatbox-container">
              <div ref={(el) => this.chatNode = el} className="chatlogs">
                {
                  this.state.messages.map(message => {

                    if (message.author === this.props.username) {
                      return (
                        <div className="yourChat">
                          <p className="chat-message">{message.message}</p>
                          <p className="user1">{message.author}</p>
                        </div>
                      )

                    }
                    else {
                      return (
                        <div className="chat">
                          {/* <img className="user-photo" src="https://image.ibb.co/nQpP8R/cat1.jpg" /> */}
                          <img className="chat-message" src={message.message} />
                          <p className="user1">{message.author}</p>
                        </div>
                      )

                    }

                  })
                }
              </div>
              <div className="chatbar">
                <Chatbox
                  onClick={this.sendMessage}
                  open={this.openAttach}
                  display={this.state.display}
                />
              </div>

            </div>
          </div>
        </div>
        <div className="img">
        </div>
      </div>

    )
  }
}

export default ChatRoom;