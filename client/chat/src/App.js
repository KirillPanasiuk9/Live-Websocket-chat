import React, {useState, useRef} from 'react';
import './App.css';
import MessagesList from "./Components/MessagesList/MessagesList";
import MessageInput from "./Components/MessageInput/MessageInput";
import LogInForm from "./Components/LogInForm/LogInForm";

function App() {
    const [messagesList, setMessagesList] = useState([]);
    const socket = useRef();
    const [connection, setConnection] = useState(false);
    const [messageText, setMessageText] = useState("");
    const [userName, setUserName] = useState("");



    const connect = (logInMessage) => {

        socket.current = new WebSocket('ws://localhost:5000')

        socket.current.onopen = (event) => {
            setConnection(true)
            const a = JSON.stringify(logInMessage);
            socket.current.send(a)
        }

        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessagesList(prevState => [message, ...prevState])
            let audio = new Audio('Train_Projects/live-chat/i_phone_notification.mp3');
            audio.play();
        }

        socket.current.onclose = (event) => {

        }

        socket.current.onerror = (event) => {

        }
    }


    const addMessage = async (newMessage) => {
        const message = JSON.stringify(newMessage);
        await socket.current.send(message)
    }


    if(connection === false) {
      return (
          <LogInForm
              userName={userName}
              setUserName={setUserName}
              connect={connect}
          />
      )
    }

    return (
        <div className="wrapper">
           <MessagesList
               userName={userName}
               messagesList={messagesList}
               setMessagesList={setMessagesList}
           />
           <MessageInput
               userName={userName}
               messageText={messageText}
               setMessageText={setMessageText}
               addMessage={addMessage}
           />
        </div>
    )
};

export default App;
