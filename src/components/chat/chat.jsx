import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import ChatHeader from "../chatHeader/chatHeader";
import ChatBody from "../chatBody/chatBody";
import ChatInput from "../chatInput/chatInput";
import UsersInRoom from "../usersInRoom/usersInRoom";
import "../chat/chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ENDPOINT = "https://real-chat-nodejs.herokuapp.com/";
  //const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <ChatHeader room={room} />
        <ChatBody messages={messages} name={name} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <UsersInRoom />
    </div>
  );
};

export default Chat;
