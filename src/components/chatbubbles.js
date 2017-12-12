import React from 'react'

const date = new Date();
let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

const Chatbubble = (props) => {
    return (
        <div className={props.me ? 'message' : 'message others'}>
            {props.message.startsWith('http') ? 
                <img src={props.message} /> : 
                <div className='chat'>{props.message}</div>}
            {props.me ?
                <div className='author'>
                    <span>{time}</span> 
                    <strong style={{marginLeft: 10}}>{props.author}</strong>
                </div> :
                <div className='author'>
                    <strong style={{marginRight: 10}}>{props.author}</strong>
                    <span>{time}</span>
                </div>}
        </div>
    )
}

export default Chatbubble;