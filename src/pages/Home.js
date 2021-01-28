import React from "react";
import Main from "../components/Main";
import Settings from "../components/Settings";
import Game from "../components/Game";
import { HomeComponent } from "./HomeElements";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Home() {
  return (
    <>
      <HomeComponent>
        <Route
          render={({ location }) => (
            <TransitionGroup className="rawr">
              <CSSTransition
                timeout={1200}
                classNames="fade"
                key={location.key}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Main} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/game" component={Game} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </HomeComponent>
    </>
  );
}

export default Home;
