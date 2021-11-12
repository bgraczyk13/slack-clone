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

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    width: 50px;
    border-radius: 8px;
  }
`;

const ChatInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
