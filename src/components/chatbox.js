import React from 'react';
import Plus from '../images/plus.png';
import Send from '../images/send.png';
import Image from '../images/image.png';
import Clip from '../images/clip.png';
import ReactFileReader from 'react-file-reader' ;
import { toasterMessenger } from './messenger';


class Chatbox extends React.Component {
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

    render() {
        return (
            <div id="chatbox">
                <div className="upload" style={{ display: this.state.open ? "inline" : "none"}}>
                    <div className="attach bubble">
                        <ReactFileReader fileTypes={[".png", ".jpg",".gif"]} handleFiles={this.handleFiles}>
                            <img className="insertImage" src={Image} />  
                        </ReactFileReader>
                        <ReactFileReader fileTypes={[".pdf"]} handleFiles={this.handleFiles}>
                            <img src={Clip} />
                        </ReactFileReader>    
                    </div>
                </div>
                <button ref={button => this.button = button} className="plus" >
                    <img src={Plus} />
                </button>
                <input 
                    type="text" 
                    placeholder="Type your message here" 
                    value={this.state.currentMessage} 
                    onChange={(ev) => this.setState({ currentMessage: ev.target.value })}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.handleClick()
                        }
                    }}
                />
                <button className="send" onClick={this.handleClick} >
                    <img src={Send} />
                </button>
            </div>
        )
    }
}

export default Chatbox