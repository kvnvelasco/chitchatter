import React from 'react'
import { toasterMessenger } from './messenger'

class Toaster extends React.Component {
    state = {
        toasterList: []
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
            </div>
        )
    }
}

export default Toaster;