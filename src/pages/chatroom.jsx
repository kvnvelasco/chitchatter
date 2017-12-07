
import React, { Component } from 'react'
import {SideBar, ChatHistory, SideImage} from '../components/chatRoom.js'
import Chatbox from '../components/chatbox.js'
import { toasterMessenger } from '../messenger'
import Toaster from '../toaster'
import { setTimeout } from 'timers';


class ChatRoom extends Component {

  state = {
    users: [],
    messages: [],
    socket: null,
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
    
    if (data.error) {
      setTimeout(() => toasterMessenger.dispatch(data.error, '#ff4d4d'), 200)
      return this.props.history.replace('/')
    }

    switch (data.type) {
      case "join_success":
        toasterMessenger.dispatch('Room Successfully Joined','#80ff80')
        break;
      case "history":
        this.setState({ messages: data.data.messages})
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
        this.setState({ messages: [...this.state.messages, { message:`${data.data.name} has entered the room`, system: true  }] })
        break;
      case "left":
        this.setState({ messages: [...this.state.messages, { message: `${data.data.username} has left the room`, system: true }] })
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

  sendFiles = (file) => {
    console.log(file)
    var formData = new FormData(file);

    
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
      <div className="chat-room">
          <div id="chat-title2">ChitChatter</div>
          <SideBar room={this.props.room} 
                   users={this.state.users}
                   logOut={this.logOut}/>
          <div className="chatbox-container">
          <ChatHistory messages={this.state.messages}
                       url={this.state.url}
                       username={this.props.username}
                       messageLength={this.state.messages.length}
                       />
          <Chatbox onClick={this.sendMessage}/>
          </div>
          <SideImage/>
          <Toaster />
      </div>

    )
  }
}

export default ChatRoom;