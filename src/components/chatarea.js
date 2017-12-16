import React from 'react'
import Chatbox from './chatbox';
import Chatbubble from './chatbubbles';

export const SideBar = (props) => {
    return (
        <div className='sidebar-chatroom'>
            <div className='chat-room'>
                <strong>Room</strong>
                <h2>{props.room}</h2>
                <a onClick={props.logOut}>(leave)</a>
            </div>
            <div className='members'>
                <strong >Members</strong>
                {props.users.map((users, i) => {
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

export class ChatHistory extends React.Component {
    componentDidUpdate(newProps) {
        (this.chatNode.scrollTop = this.chatNode.scrollHeight)
    }

    render() {
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