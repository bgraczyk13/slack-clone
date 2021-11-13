import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidenavOption from "./SidenavOption";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidenav() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidenavContainer>
      <SidenavHeader>
        <SidenavInfo>
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidenavInfo>
        <CreateIcon />
      </SidenavHeader>

      <SidenavOption Icon={InsertCommentIcon} title="Threads" />
      <SidenavOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidenavOption Icon={DraftsIcon} title="Saved Items" />
      <SidenavOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidenavOption Icon={PeopleAltIcon} title="People & User Groups" />
      <SidenavOption Icon={AppsIcon} title="Apps" />
      <SidenavOption Icon={FileCopyIcon} title="File Browser" />
      <SidenavOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidenavOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidenavOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidenavOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidenavContainer>
  );
}

export default Sidenav;

const SidenavContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidenavHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidenavInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
