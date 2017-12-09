import React from 'react'
import Chatbox from './chatbox';
//import './chatroom.css'
//import CornerImage from '../side-image.png';
import {
    ChatBubblesME,
    ChatBubblesOTHERS,
    ChatBubblesIMAGEME,
    ChatBubblesIMAGEOTHERS,
    ChatBubblesPDFME,
    ChatBubblesPDFOthers
} from './chatBubbles.js'

export const SideBar = (props) => {
    return (
        <div className='sidebar-chatroom'>
            <div className='chat-room'>
                <strong>Room</strong>
                <h2>{props.room}</h2>
                <a onClick={props.logOut}>(leave)</a>
            </div>
            <strong>Members</strong>
            {props.users.map(users => {
                return(
                    <div className="active"><p>{users}</p></div>
                )
            })}
        </div>
    )
}

export class ChatHistory extends React.Component {
    componentDidUpdate(newProps) {
        (this.chatNode.scrollTop = this.chatNode.scrollHeight)
    }

    render() {
        return (
            <div ref={(el) => this.chatNode = el} className="chatarea">
                <div className="chat-messages">
                    {this.props.messages.map(message => {
                        if(message.system === true){
                            return(
                                <div className="joined-leave">
                                    <em>{message.message}</em>
                                </div>
                            )
                            // Handle a case where there is no message.message
                            // but a message.fileURL instead
                        }else if (message.author === this.props.username) {
                            return (
                                <div>
                                    {/* <ChatBubblesME message={message.message}
                                        author={message.author} /> */}
                                    
                                    <ChatBubblesIMAGEME messages={message.message}
                                        author={message.author} />
                                    {/* <ChatBubblesPDFME message={message.message}
                                        author={message.author} /> */}
                                </div>
                            )
                        } else if (message.author !== this.props.username) {
                            return (
                                <div>
                                    {/* <ChatBubblesOTHERS message={message.message}
                                        author={message.author} /> */}
                                     <ChatBubblesIMAGEOTHERS messages={message.message}
                                        author={message.author} />
                                    {/* <ChatBubblesPDFOthers message={message.message}
                                        author={message.author} /> */}
                                </div>
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

/* export class SideImage extends Component {
    render() {
        return (
            <div className="background-photo">
            </div>
        )
    }
} */







