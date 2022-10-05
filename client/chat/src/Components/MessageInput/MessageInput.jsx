import React, {useState} from 'react';
import './messageInput.css'


const MessageInput = ({userName, messageText, setMessageText, addMessage}) => {

    const onEnterDown = (key) => {
        if(key === "Enter") {createMessage()}
    }

    const createMessage = (event) => {
        // event.preventDefault()

        const hours = () => {
            if (new Date().getHours() < 10) {
                const hours = `0${new Date().getHours()}`
                return hours
            }
            return new Date().getHours()
        }

        const minutes = () => {
            if (new Date().getMinutes() < 10) {
                const minutes = `0${new Date().getMinutes()}`
                return minutes
            }
            return new Date().getMinutes()
        }

        if (messageText !== "") {
            const newMessage = {
                event: 'message',
                userName: userName,
                text: messageText,
                time: `${hours()}:${minutes()}`,
                id: Date.now(),
            }
            addMessage(newMessage)
            setMessageText("")
        }
    }

    return (
        <div className="messageInput">
            <input
                className="messageInput_textField"
                type={"text"}
                placeholder={"Message"}
                value={messageText}
                autoFocus={true}
                onChange={event => setMessageText(event.target.value)}
                onKeyDown={event => (onEnterDown(event.key))}
            />
            <button className="messageInput_button" onClick={createMessage}>
                <svg width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icons">
                        <g id="24-px-Icons" transform="translate(-266.000000, -27.000000)" stroke="#000000">
                            <g id="ic_upward" transform="translate(264.000000, 24.000000)">
                                <g transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " id="ic_back">
                                    <g transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000)">
                                        <g id="forward" transform="translate(4.000000, 3.000000)">
                                            <path className="messageInput_button_arrow" d="M0,9 L16,9" id="Line"></path>
                                            <path className="messageInput_button_arrow" d="M16,9 L7.93774223,0.937742233" id="Line"></path>
                                            <path className="messageInput_button_arrow" d="M16,9 L7.93774223,17.0622578" id="Line"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default MessageInput;
