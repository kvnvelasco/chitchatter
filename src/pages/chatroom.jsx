import React, {Component} from 'react'

class ChatRoom extends Component{
    render(){
        return(
          <div>
            <header className="App-Header2">
            <img src="https://image.ibb.co/gvqtiR/logo.png" alt="logo"/>
            <h1 className="App-title">ChitChat</h1>
            <button>Leave Room</button>
            </header>

            <div className="users">
                  <p>TonySparkles</p>
                  <p>DanielRadcliffdive</p>
                  <p>JuliusCeasarSalad</p>
                  <p>GeriSpices</p>  
            </div>

            <div className="chatbox">
                <div className="chatlogs">
                    <div className="chat">
                        <img className="user-photo" src="https://image.ibb.co/nQpP8R/cat1.jpg"/>
                        <p className="chat-message">I see dead people</p>
                        <p className="user1">TonySparkles</p>
                    </div>
                    <div className="chat">
                    <img className="user-photo" src="https://image.ibb.co/neJvF6/cat2.jpg"/>
                        <p className="chat-message">I see stupid People</p>
                        <p className="user2">You</p>
                    </div>
                    <div className="chat">
                    <img className="user-photo" src="https://image.ibb.co/nQpP8R/cat1.jpg"/>
                        <p className="chat-message">Are you looking at yourself?</p>
                        <p className="user1">TonySparkles</p>
                        </div>
                </div>
              </div>
              

              <div className="typebox">
                <textarea></textarea>
                <button>Send</button>
              </div>
          </div>
        )
    }
}

export default ChatRoom;