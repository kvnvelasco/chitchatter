import React, { Component } from 'react';
import { toasterMessenger } from '../components/messenger';
import Chatbox from '../components/Chatbox';

class ChatboxContainer extends Component {
    state = {
        currentMessage: "",
        open: false
    }
    
    componentDidMount(){
        document.addEventListener('click',this.closePopUp)
        this.button.addEventListener('click',this.togglePopUp)
    }

    componentWillUnmount(){
        document.removeEventListener('click',this.closePopUp)
    }

    closePopUp=()=>{
        this.setState({open:false})
    }

    togglePopUp=(e)=>{
        e.stopPropagation()
        this.setState({open:!this.state.open})
    }

    handleClick = () => {
        if (!this.state.currentMessage) {
            toasterMessenger.dispatch('You can\'t send blank messages', 'orange')
        } else {
            this.props.onClick(this.state.currentMessage)
            this.setState({ currentMessage: "" })
        }   
    }

    handleFiles = (files) => {
        this.props.sendFiles(files)
    }

    assignButton = button => {
        this.button = button
    }

    handleChangeInput = ev => {
        this.setState({currentMessage: ev.target.value})
    }

    handleKeyPress = ev => {
        if (ev.key === 'Enter') {
            this.handleClick()
        }
    }

    render() {
        return (
            <Chatbox 
                state={this.state}
                handleFiles={this.handleFiles}
                buttonRef={this.assignButton}
                onChangeInput={this.handleChangeInput}
                onKeyPress={this.handleKeyPress}
                onClick={this.handleClick}
            />
        )
    }
}

export default ChatboxContainer;