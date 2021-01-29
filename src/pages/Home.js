import React from "react";
import Main from "../components/Main";
import Settings from "../components/Settings";
import Game from "../components/Game";
import { HomeComponent } from "./HomeElements";
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <HomeComponent>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/settings" component={Settings} />
          <Route path="/game" component={Game} />
        </Switch>
      </HomeComponent>
    </>
  );
}

export default Home;
