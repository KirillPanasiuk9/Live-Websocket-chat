import React from 'react';
import './message.css'

const Message = ({userName, message}) => {

    // window.onfocus(event)

    if(message.event === 'connection') {
        return (
            <div className="connectionMessage">
                <div className="connectionMessage_text">
                    {message.text}
                </div>
                <div className="connectionMessage_time">
                    {message.time}
                </div>
            </div>
        )
    }  else if (message.userName === userName) {
        return (
            <div className="message">
                <div className="message_userName">
                    {message.userName}
                </div>
                <div className="message_textTime">
                    <div className="message_textTime_text">
                        {message.text}
                    </div>
                    <div className="message_textTime_time">
                        {message.time}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="message receivedMessage">
                <div className="message_userName">
                    {message.userName}
                </div>
                <div className="message_textTime">
                    <div className="message_textTime_text">
                        {message.text}
                    </div>
                    <div className="message_textTime_time">
                        {message.time}
                    </div>
                </div>
            </div>
        );
    }
};

export default Message;
