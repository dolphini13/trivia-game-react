import React, { useState } from "react";
import Main from "../components/Main";
import Settings from "../components/Settings";
import Game from "../components/Game";
import { HomeComponent } from "./HomeElements";
import { Switch, Route } from "react-router-dom";

function Home() {
  const [score, setScore] = useState(0);

  const addScore = () => {
    console.log("called");
    setScore(score + 1);
  };

  return (
    <>
      <HomeComponent>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/settings" component={Settings} />
          <Route
            path="/game"
            component={Game}
            score={score}
            addScore={addScore}
          />
        </Switch>
      </HomeComponent>
    </>
  );
}

export default Home;
