import React from 'react';
import Chatbox from './chatBox';
import Chatbubble from './chatBubbles';

class ChatHistory extends React.Component {
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

export default ChatHistory;