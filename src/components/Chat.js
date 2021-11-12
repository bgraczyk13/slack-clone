import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MessageInput from "./MessageInput";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  console.log(roomDetails?.data());
  console.log(roomMessages);

  return (
    <ChatBox>
      <>
        <Chatarea>
          <ChatLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </ChatLeft>
          <ChatRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </ChatRight>
        </Chatarea>
        <Messages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();

            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
        </Messages>

        <MessageInput
          channelName={roomDetails?.data().name}
          channelId={roomId}
        />
      </>
    </ChatBox>
  );
}

export default Chat;

const Chatarea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const Messages = styled.div``;

const ChatLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const ChatRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatBox = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
