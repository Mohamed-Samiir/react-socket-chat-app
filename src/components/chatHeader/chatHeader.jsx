import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./chatHeader.css";

const ChatHeader = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <FontAwesomeIcon icon={faGlobe} color="green" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <FontAwesomeIcon icon={faTimes} color="black" />
      </a>
    </div>
  </div>
);

export default ChatHeader;
