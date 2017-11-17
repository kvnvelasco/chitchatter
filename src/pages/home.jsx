import React, {Component} from 'react'

class Home extends Component{
    render(){
        return(
            <div>
                
                <div className="logo-title">
                    <img src="logo.png"/>
                    <p className="app-title">ChitChatter</p>
                </div>

                <div className="container">
                    <form>
                        <div className="form-inputs">
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-inputs">
                            <input type="text" name="chatroomname" placeholder="chatroom-name"/>
                        </div>
                        <input type="submit" name="submit" value="Enter Room" onClick={(e)=>{
                            this.props.history.push('/chatroom')
                            e.preventDefault()
                        }} />
                    </form>
                </div>

            </div>
        )
    }
}