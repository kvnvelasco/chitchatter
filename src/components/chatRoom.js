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
                        <strong>{this.props.room}</strong>
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
    ComponentWillRecieveProps(newProps){
        if(this.props.messageLength < newProps.messages.length){
            (this.chatNode.scrollTop = this.chatNode.scrollHeight)
        }
    }
    render() {
        return (
            <div ref={(el)=> this.chatNode = el} className="chatlogs">
                {
                    this.props.Messages.map(message => {
                        if (message.author === this.props.Username) {
                            switch(this.props.dataType){
                                case "message": 
                                return(
                                    <ChatBubblesME message={message.message}
                                    author={message.author}/>
                                )
                                break;
                                case "image":
                                return(
                                    <ChatBubblesIMAGEME message={message.message}
                                    author={message.author}/>
                                ) 
                                break;
                                case "pdf":
                                return(
                                    <ChatBubblesPDFME  message={message.message}
                                    author={message.author}/>
                                )
                                break;
                                default: 
                                return(
                                    console.log(data.type)
                                )
                            }
                        }
                        else {
                            return (
                                swtich(this.props.dataType){
                                    case "message":
                                    return(
                                        <ChatBubblesOTHERS message={message.message}
                                        author={message.author}/>
                                    )
                                    break;
                                    case "image":
                                    return (
                                        <ChatBubblesIMAGEOTHERS message={message.message}
                                        author={message.author}/>
                                    )    
                                    break;
                                    case "pdf":
                                    return (
                                        <ChatBubblesPDFOthers message={message.message}
                                        author={message.author}/>
                                    )
                                    break;
                                    default:
                                    return(
                                        console.log(data.type)
                                    )
                                
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