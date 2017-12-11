import React from 'react'
/* import './chatbubbles.css' */

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
/*-------------------------------------- TEXT BUBBLES ----------------------------------*/
/* export const ChatBubblesME = (props) => {
    return (
        <div className="your-chat">
            <div className="chat-message">
                    {props.message}
                <div className="user-me-name-time">
                    <strong>
                        {props.author} 6:05AM
                    </strong>
                </div>
            </div>
        </div>
    )
}


export const ChatBubblesOTHERS = (props) => {
    return (
        <div className="chat">
            <div className="chat-message">
                    {props.message}
                <div className="user1-name-time">
                    <strong>
                        {props.author} 7:45PM
                    </strong>
                </div>
            </div>
        </div>
    )
}
 */
/*---------------------------------------- IMAGE BUBBLES ------------------------------*/


//export const ChatBubblesIMAGEME = (props) => {
//    return (
//        <div className="your-image">
//            <div className="image-message">
//                <img src={props.messages} />
//                <div className="user">
//                    <strong>
//                    7:45 PM {props.author}
//                    </strong>
//                </div>
//            </div>
//        </div>
//    )
//}
//
//export const ChatBubblesIMAGEOTHERS = (props) => {
//    return (
//        <div className="chat-image">
//            {/* <img className="user-photo" src="https://image.ibb.co/nQpP8R/cat1.jpg" /> */}
//            <div className="chat-image2">
//                <img src={props.messages} />
//                <div className="user1">
//                    <strong>
//                        {props.author} 7:45 PM
//                    </strong>
//                </div>
//            </div>
//        </div>
//    )
//}


/*-------------------------------------- PDF -----------------------------------------*/

// export const ChatBubblesPDFME = (props) => {
//     return (
//         <div className="your-chat-pdf">
//             <div className="chat-message-pdf">
//                 <div>
//                     <a href="#">
//                         <img src="https://files.slack.com/files-pri/T78PNV5A6-F86QZAF1R/combined_shape.png"
//                             id="pdf" />
//                         <strong>
//                             {props.message}
//                         </strong>
//                     </a>
//                 </div>
//                 <div className="user-me-pdf-name-time">
//                     <strong>
//                         {props.author} 6:05AM
//                     </strong>
//                 </div>
//             </div>
//         </div>
//     )

// }


// export const ChatBubblesPDFOthers = (props) => {
//     return (
//         <div className="chat-pdf">
//             {/* <img className="user-photo" src="https://image.ibb.co/nQpP8R/cat1.jpg" /> */}
//             <div className="chat-message-pdf">
//                 <a href="asdf">
//                     <img src="https://files.slack.com/files-pri/T78PNV5A6-F86QZAF1R/combined_shape.png"
//                         id="pdf-others" />
//                     <strong>
//                         {props.message}
//                     </strong>
//                 </a>
//                 <div className ="user1-pdf-name-time">
//                     <strong>
//                         {props.author} 7:45PM
//                     </strong>
//                 </div>
//             </div>
//         </div>
//     )
// }