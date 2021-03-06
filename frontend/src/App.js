// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Spells from "./components/Spells"
import Landing from "./components/Landing";
import GrimoireDetail from "./components/GrimoireDetail";
//import GrimoireList from "./components/Grimoires";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (

        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route path='/grimoires/:grimoireId'>
            <GrimoireDetail/>
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path='/grimoires'>
            <Spells/>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
