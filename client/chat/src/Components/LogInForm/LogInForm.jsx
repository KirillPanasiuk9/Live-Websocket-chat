import React, {useState} from 'react';
import './logInForm.css'

const LogInForm = ({userName, setUserName, connect}) => {

    const onEnterDown = (key) => {
        if(key === "Enter") {createConnection()}
    }

    const createConnection = () => {

        const hours = () => {
            if (new Date().getHours() < 10) {
                const hours = `0${new Date().getHours()}`
                return hours
            } return  new Date().getHours()
        }

        const minutes = () => {
            if (new Date().getMinutes() < 10) {
                const minutes = `0${new Date().getMinutes()}`
                return minutes
            } return  new Date().getMinutes()
        }

        const logInMessage = {
            event: "connection",
            text: `${userName} connected`,
            time: `${hours()}:${minutes()}`,
            id: Date.now()
        }

        if(userName === "") {
            const input = document.getElementsByClassName("logInInput")[0];
            input.style.borderColor = "red"
            setTimeout(() => {input.style.borderColor = "black"}, 1000)
        }
        else {connect(logInMessage)}

    }

    return (
        <div className="logInForm">
            <input
                className="logInInput"
                type={"text"}
                placeholder={"What is your Name?"}
                autoFocus={true}
                value={userName}
                onChange={event => setUserName(event.target.value)}
                onKeyDown={event => (onEnterDown(event.key))}
            />
            <button className={"logInButton"} onClick={createConnection}>Log In</button>
        </div>
    );
};

export default LogInForm;
