import React from "react";
import styled from "styled-components";

function SidenavOption({ Icon, title }) {
  return (
    <SidenavOptionContainer>
      {Icon && <Icon fontsize="small" style={{ padding: 10 }} />}
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

const SidenavOptionChannel = styled.div``;
