import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import styled from "styled-components";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  // Loading Image
  if (loading) {
    return (
      <LoadingApp>
        <LoadingContent>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </LoadingContent>
      </LoadingApp>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
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
        )}
      </Router>
    </div>
  );
}

export default App;

const LoadingApp = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const LoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const SlackBody = styled.div`
  display: flex;
  height: 100vh;
`;
