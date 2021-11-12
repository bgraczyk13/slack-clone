import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import styled from "styled-components";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Navbar />
          <SlackBody>
            <Sidenav />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </SlackBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const SlackBody = styled.div`
  display: flex;
  height: 100vh;
`;
