import React, { Component } from 'react'
//import './chatbubbles.css'
/*-------------------------------------- TEXT BUBBLES ----------------------------------*/
export class ChatBubblesME extends Component {
    render() {
        return (
            <div className="your-chat">
                <div className="chat-message">
                        {this.props.message}
                    <div className="user-me-name-time">
                        <strong>
                            {this.props.author} 6:05AM
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}


export class ChatBubblesOTHERS extends Component {
    render() {
        return (
            <div className="chat">
                <div className="chat-message">
                        {this.props.message}
                    <div className="user1-name-time">
                        <strong>
                            {this.props.author} 7:45PM
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}

/*---------------------------------------- IMAGE BUBBLES ------------------------------*/


export class ChatBubblesIMAGEME extends Component {
    render() {
        return (
            <div className="your-image">
                <div className="image-message">
                    <img src={this.props.messages} />
                    <div className="user">
                        <strong>
                        7:45 PM {this.props.author}
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}

export class ChatBubblesIMAGEOTHERS extends Component {
    render() {
        return (
            <div className="chat-image">
                {/* <img className="user-photo" src="https://image.ibb.co/nQpP8R/cat1.jpg" /> */}
                <div className="chat-image2">
                    <img src={this.props.messages} />
                    <div className="user1">
                        <strong>
                            {this.props.author} 7:45 PM
                        </strong>
                    </div>
                </div>

            </div>
        )
    }
}


/*-------------------------------------- PDF -----------------------------------------*/

export class ChatBubblesPDFME extends Component {
    render() {
        return (
            <div className="your-chat-pdf">
                <div className="chat-message-pdf">
                    <div>
                        <a href="#">
                            <img src="https://files.slack.com/files-pri/T78PNV5A6-F86QZAF1R/combined_shape.png"
                                id="pdf" />
                            <strong>
                                {this.props.message}
                            </strong>
                        </a>
                    </div>
                    <div className="user-me-pdf-name-time">
                        <strong>
                            {this.props.author} 6:05AM
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}


export class ChatBubblesPDFOthers extends Component {
    // 
    render() {
        return (
            <div className="chat-pdf">
                {/* <img className="user-photo" src="https://image.ibb.co/nQpP8R/cat1.jpg" /> */}
                <div className="chat-message-pdf">
                    <a href="asdf">
                        <img src="https://files.slack.com/files-pri/T78PNV5A6-F86QZAF1R/combined_shape.png"
                            id="pdf-others" />
                        <strong>
                            {this.props.message}
                        </strong>
                    </a>
                    <div className ="user1-pdf-name-time">
                        <strong>
                            {this.props.author} 7:45PM
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}