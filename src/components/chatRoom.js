import React, { Component } from 'react'
import './chatroom.css'
import {
    ChatBubblesME,
    ChatBubblesOTHERS,
    ChatBubblesIMAGEME,
    ChatBubblesIMAGEOTHERS,
    ChatBubblesPDFME,
    ChatBubblesPDFOthers
} from './chatBubbles.js'

export class SideBar extends Component {
    render() {
        return (
            <div className="users container-fluid">
                <p>
                    <strong>
                        Room
                        <br />
                        {this.props.room}
                    </strong>
                    <a onClick={this.props.logOut}>(Leave)</a>
                </p>
                <strong>Members</strong>
                {this.props.users.map(user => (
                    <div className="active-users"><p>{user}</p></div>
                ))}
            </div>
        )
    }
}

export class ChatHistory extends Component {
    ComponentWillRecieveProps(newProps) {
        if (this.props.messageLength < newProps.messages.length) {
            (this.chatNode.scrollTop = this.chatNode.scrollHeight)
        }
    }
    render() {
        return (
            <div ref={(el) => this.chatNode = el} className="chatlogs">
                {
                    this.props.messages.map(message => {
                        if (message.author === this.props.username) {
                            return (
                                <div>
                                    <ChatBubblesME message={message.message}
                                        author={message.author} />
                                    {/* 
                                    <ChatBubblesIMAGEME message={message.message}
                                        author={message.author} />

                                    <ChatBubblesPDFME message={message.message}
                                        author={message.author} /> */}
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <ChatBubblesOTHERS message={message.message}
                                        author={message.author} />
                                    {/* <ChatBubblesIMAGEOTHERS message={message.message}
                                        author={message.author} />

                                    <ChatBubblesPDFOthers message={message.message}
                                        author={message.author} /> */}
                                </div>
                            )
                        }
                    })

                }
            </div>
        )
    }
}

export class SideImage extends Component {
    render() {
        return (
            <div className="background-photo">
                {/* SUPPOSE TO BE EMPTY*/}
            </div>
        )
    }
}







