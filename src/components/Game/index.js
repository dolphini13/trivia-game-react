import React, { Component } from "react";
import {
  GameWrapper,
  GameButtonWrapper,
  GameImg,
  SettingsBack,
} from "./GameElements";
import { BackArrow, Button } from "../Utilities/ButtonElements";
import questionsvg from "../../images/questionsvg.svg";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: "medium",
    };
  }

  componentDidMount() {
    if (this.props.location.difficulty) {
      this.setState({ difficulty: this.props.location.difficulty });
    }
  }

  render() {
    return (
      <GameWrapper>
        <GameImg src={questionsvg} />
        <GameButtonWrapper>
          <div>Which of the following dice is not a platonic solid?</div>
          <Button to="">1</Button>
          <Button to="">2</Button>
          <Button to="">3</Button>
          <Button to="">4</Button>
        </GameButtonWrapper>
        <SettingsBack to="/settings">
          <BackArrow></BackArrow>
        </SettingsBack>
      </GameWrapper>
    );
  }
}

export default Game;
