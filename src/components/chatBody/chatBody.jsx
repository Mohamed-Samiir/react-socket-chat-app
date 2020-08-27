import React from "react";
import Message from "../message/message";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatBody.css";

const ChatBody = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default ChatBody;
