import React, { Component } from 'react'
import {SideBar, ChatHistory, SideImage} from '../components/chatRoom.js'



class ChatRoom extends Component {
  state = {
    users: [],
    messages: [],
    currentMessage: "",
    socket: null
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

  
  sendMessage = () => {
    this.state.socket.send(JSON.stringify(
      {
        type: 'message',
        data: {
          message: this.state.currentMessage
          // 'https://files.slack.com/files-tmb/T78PNV5A6-F86QZ96FM-40ca868ee5/joshua-earle-234740_720.png'
        }
      }
    ))
    this.setState({
      currentMessage: ''
    })
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
    console.log(this.data)
    return (
      <div className="chat-room">
          <div className="App-title2">ChitChatter</div>
          <SideBar room={this.props.room} 
                   users={this.state.users}
                   logOut={this.logOut}/>
          <div className="chatbox-container">
          <ChatHistory Messages={this.state.messages}
                       Username={this.props.username}
                       messageLength={this.state.messages.length}
                       dataType={this.data.type}/>
            <div className="typebox">
                <textarea value={this.state.currentMessage} 
                          onChange={(ev) => this.setState({ currentMessage: ev.target.value })}>
                </textarea>
                <button onClick={this.sendMessage} >Send</button>
            </div> 
          </div>
          <SideImage/>
      </div>

    )
  }
}

export default ChatRoom;