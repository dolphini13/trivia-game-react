import React, { Component } from "react";
import {
  MainWrapper,
  MainHeader,
  MainPic,
  MainButtonWrapper,
  MainPicAlt,
} from "./MainElements";

import trivialogo from "../../images/trivialogo2.svg";
import triviaalt from "../../images/triviaalt.svg";
import { Button } from "../Utilities/ButtonElements";

export class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <MainHeader>
          <MainPic src={trivialogo} />
          <MainPicAlt src={triviaalt} />
        </MainHeader>
        <MainButtonWrapper>
          <Button to={"settings"}>Start Game</Button>
        </MainButtonWrapper>
      </MainWrapper>
    );
  }
}

export default Main;
