import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

function SidenavOption({ Icon, title, addChannelOption, id }) {
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidenavOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidenavOptionChannel>
          <span>#</span> {title}
        </SidenavOptionChannel>
      )}
    </SidenavOptionContainer>
  );
}

export default SidenavOption;

const SidenavOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidenavOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
