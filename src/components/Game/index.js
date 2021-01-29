import React, { Component } from "react";
import {
  GameWrapper,
  GameButtonWrapper,
  GameImg,
  SettingsBack,
  GameQuestion,
} from "./GameElements";
import { BackArrow, AnswerButton } from "../Utilities/ButtonElements";
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
          <GameQuestion questionlenght="normal">
            Which of the following dice is not a platonic solid?Which of the
            following dice is not a platonic solid?
          </GameQuestion>
          <AnswerButton to="" answerlenght="normal">
            Which of the following dice is not a platonic
          </AnswerButton>
          <AnswerButton to="" answerlenght="long">
            Which of the following dice is not a platonic solid?following dice
            is not a platonic solid?following dice is not a platonic solid?
          </AnswerButton>
          <AnswerButton to="" answerlenght="normal">
            Which of the following
          </AnswerButton>
          <AnswerButton to="" answerlenght="normal">
            Which of the following
          </AnswerButton>
        </GameButtonWrapper>
        <SettingsBack to="/settings">
          <BackArrow></BackArrow>
        </SettingsBack>
      </GameWrapper>
    );
  }
}

export default Game;
