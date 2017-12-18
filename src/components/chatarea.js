import React from 'react'
import Chatbox from './chatbox';
import Chatbubble from './chatbubbles';

export class SideBar extends React.Component {
    constructor() {
        super();
        this.state = {
            reveal: false,
            sideClass: 'sidebar-chatroom'
        }
    }
    
    componentDidMount() {
        document.addEventListener('click', this.closeSide);
        this.button.addEventListener('click', this.toggleSidebar);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeSide)
    }

    closeSide = () => {
        this.setState({reveal: false})
    }

    toggleSidebar = (e) => {
        e.stopPropagation()
        this.setState({reveal: !this.state.reveal})
    } 

    render() {
        return (
            <div className={this.state.reveal ? 'sidebar-chatroom reveal' : 'sidebar-chatroom'}>
                <button 
                    ref = {button => this.button = button}
                    onClick={this.toggleSidebar}>
                    Room
                </button>
                <div className='chat-room'>
                    <strong>Room</strong>
                    <h2>{this.props.room}</h2>
                    <a onClick={this.props.logOut}>(leave)</a>
                </div>
                <div className='members'>
                    <strong >Members</strong>
                    {this.props.users.map((users, i) => {
                        return(
                            <div key={i} className="active">
                                <p>{users}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export class ChatHistory extends React.Component {
    componentDidUpdate(newProps) {
        (this.chatNode.scrollTop = this.chatNode.scrollHeight)
    }

    render() {
        console.log('chat message', this.props.messages)
        return (
            <div className="chatarea">
                <div ref={(el) => this.chatNode = el} className="chat-messages">
                    {this.props.messages.map((message, i) => {
                        if(message.system === true) {
                            return(
                                <div key={i} className="joined-leave">
                                    <em>{message.message}</em>
                                </div>
                            )
                        } else {
                            return (
                                <Chatbubble
                                    key={i}
                                    message={message.message}
                                    author={message.author}
                                    date={message.date}
                                    me={message.author === this.props.username}
                                />
                            )
                        }
                    })}
                </div>
                <Chatbox 
                    onClick={this.props.onClick}
                    sendFiles={this.props.sendFiles}
                />
            </div>
        )
    }
}