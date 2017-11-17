import React, {Component} from 'react'

class ChatRoom extends Component{
    render(){
        return(
          <div>
              <nav>
                  <img src="logo.png"/>
                  <button>Leave Room</button>
              </nav>

              <div className="users">
                  <p>TonyTony1</p>
                  <p>DanielDanD</p>
                  <p>JuliusCeasar</p>
                  <p>TomnGeri</p>  
              </div>

              <div className="chatbox">
                <div className="chatlogs">
                    <div className="chat">
                        <p className="chat-message">I see Dead People</p>
                        <p className="user">TonyTonyy1</p>
                    </div>
                    <div className="chat">
                        <p className="chat-message">I see Dead People</p>
                        <p className="user">You</p>
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