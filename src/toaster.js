import React from 'react'
import { toasterMessenger } from './messenger'
import './toaster.css'
//import debounce from 'lodash.debounce'

class Toaster extends React.Component {
    state = {
        toasterList: [],
        fade: false
    }

    componentDidMount() {
        toasterMessenger.subscribe(this.addToasterItem)
    }

    componentWillUnmount() {
        toasterMessenger.unsubscribe(this.addToasterItem)
    }

    addToasterItem = (message, bgcolor) => {
        this.setState({
            toasterList: [
                ...this.state.toasterList,
                {message, bgcolor}
            ],
        })
        this.removeToasterItem();
    }

    //fiveSecondsfadeOut = () => {
    //    setTimeout(() => 'toaster-item', 50);
    //    setTimeout(() => 'toaster-item fadeOut', 4500);
    //    setTimeout(() => 'toaster-item', 5000);
    //}

    removeToasterItem = () => {
        setTimeout(() => 
            this.setState({
                toasterList: this.state.toasterList.slice(1)
            })
            , 5000)
    }

    fiveSecondsDisplay = () => {
        setTimeout(() => 'block', 50)
        setTimeout(() => 'none', 5000)
    }

    render() {
        return (
            <div className='toaster-container'>
                {this.state.toasterList.map((item, index) => 
                    <div 
                        key={index} 
                        className='toaster-item'
                        style={{
                            display: this.fiveSecondsDisplay,
                            backgroundColor: item.bgcolor }}>
                        {item.message}
                    </div>
                    
                )}
                {/*<div className='toaster-item'>Another user has taken your username, pick another</div>
                <div className='toaster-item'>Another user has taken your username, pick another</div>*/}
            </div>
        )
    }
}

export default Toaster;