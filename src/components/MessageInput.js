import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";
import { useState } from "react";

function MessageInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault(); // Prevents refresh

    console.log(channelId);

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Robert Graczyk",
      userImage:
        "https://firebasestorage.googleapis.com/v0/b/slack-clone-62d87.appspot.com/o/profilepiccc.jpg?alt=media&token=d3b5cb4b-4922-4bd1-ac84-5bb9e89f96ae",
    });

    setInput("");
  };

  return (
    <MessageInputBox>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </MessageInputBox>
  );
}

export default MessageInput;

const MessageInputBox = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
