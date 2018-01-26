import React from 'react';
import { toasterMessenger } from '../components/Messenger';
import Toaster from '../components/Toaster';

class ToasterContainer extends React.Component {
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
            <Toaster 
                state={this.state}
                toasterDisplay={this.fiveSecondsDisplay}
            />
        )
    }
}

export default ToasterContainer;