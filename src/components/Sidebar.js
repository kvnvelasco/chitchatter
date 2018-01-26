import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
      return (
          <div className={this.props.state.reveal ? 'sidebar-chatroom reveal' : 'sidebar-chatroom'}>
              <button 
                  ref={this.props.buttonRef}
                  onClick={this.props.onClickButton}>
                  Room
              </button>
              <div className='chat-room'>
                  <strong>Room</strong>
                  <h2>{this.props.room}</h2>
                  <a onClick={this.props.onClickLogout}>(leave)</a>
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

export default Sidebar;