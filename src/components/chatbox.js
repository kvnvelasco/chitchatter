import React, { Component } from 'react';
import Plus from '../plus.png';
import Send from '../send.png';
import Image from '../image.png';
import Clip from '../clip.png';
import ReactFileReader from 'react-file-reader';
import './chatbox.css'


class Chatbox extends Component {
    state = {
        currentMessage: "",
    }
    

    handleClick = () => {
        this.props.onClick(this.state.currentMessage)
        this.setState({ currentMessage: "" })
    }

    handleFiles = (files) => {
        console.log(files)
    }

    render() {
        return (
            <div className="chatbox">
                <div className="upload" style={{ display: this.props.display ? "inline" : "none"}}>
                    <div className="attach bubble">
                        <ReactFileReader fileTypes={[".png", ".jpg",".gif"]} handleFiles={this.handleFiles}>
                            <img className="insertImage" src={Image} />  
                        </ReactFileReader>
                        <ReactFileReader fileTypes={[".pdf"]} handleFiles={this.handleFiles}>
                            <img src={Clip} />
                        </ReactFileReader>    
                    </div>
                </div>
                <button className="plus" onClick={this.props.open} ><img src={Plus} /></button>
                <input type="text" placeholder="Type your message here" value={this.state.currentMessage} onChange={(ev) => this.setState({ currentMessage: ev.target.value })}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.handleClick()
                        }
                    }} />
                <button className="send" onClick={this.handleClick} ><img src={Send} /></button>

            </div>
        )
    }
}

export default Chatbox