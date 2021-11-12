import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageBox>
      <img src={userImage} alt="" />
      <ChatInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </ChatInfo>
    </MessageBox>
  );
}

export default Message;

const MessageBox = styled.div``;

const ChatInfo = styled.div``;
