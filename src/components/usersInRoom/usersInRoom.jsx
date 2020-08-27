import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "../usersInRoom/usersInRoom.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Realtime Chat Application{" "}
        <FontAwesomeIcon icon={faCommentDots} color="green" />
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <FontAwesomeIcon icon={faHeart} color="red" />
      </h2>
      <h2>
        Try it out right now!{" "}
        <FontAwesomeIcon icon={faLongArrowAltLeft} color="blue" />
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <FontAwesomeIcon icon={faGlobe} color="green" />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
