import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

class SidebarContainer extends Component {
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

  assignButton = button => {
    this.button = button
  }

  render() {
    return (    
        <Sidebar 
            state={this.state}
            buttonRef={this.assignButton}
            onClickButton={this.toggleSidebar}
            room={this.props.room}
            onClickLogout={this.props.logOut}
            users={this.props.users}
        />
    )
  }
}

export default SidebarContainer;