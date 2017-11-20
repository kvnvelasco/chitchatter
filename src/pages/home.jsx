import React, {Component} from 'react';

class Home extends Component{
    render(){

        return(
            <div>
                <div className="logo-title">
                    <img className="App-logo" src="https://image.ibb.co/gvqtiR/logo.png" />
                    <p className="app-title">ChitChat</p>
                </div>

                <div className="container">
                    <div className="jumbotron">
                    <p>Join a Chatroom</p>
                    <form>
                        <div className="form-inputs">
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <br />
                        <div className="form-inputs">
                            <input type="text" name="chatroomname" placeholder="chatroom-name"/>
                        </div>
                        <br />
                        <input type="submit" name="submit" value="Enter Room" onClick={(e)=>{
                            this.props.history.push('/chatroom')
                            e.preventDefault()
                        }} />
                    </form>
                    </div>
                </div>
                </div>
        )
    }
}

export default Home;