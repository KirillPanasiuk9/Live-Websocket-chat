import React from 'react';
import './messagesList.css'
import Message from "../Message/Message";

const MessagesList = ({userName, messagesList}) => {
    return (
        <div className="messagesList">
            {messagesList.map(message =>
                <Message
                    userName={userName}
                    message={message}
                />
            )}
        </div>
    );
};

export default MessagesList;
