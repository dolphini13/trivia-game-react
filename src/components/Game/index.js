import React, { Component } from "react";
import {
  GameWrapper,
  GameButtonWrapper,
  GameImg,
  SettingsBack,
  GameQuestion,
  GameScore,
} from "./GameElements";
import { BackArrow, AnswerButton, Spinner } from "../Utilities/ButtonElements";
import questionsvg from "../../images/questionsvg.svg";
import axios from "axios";
import he from "he";
const otdb = "https://opentdb.com/api.php?amount=1";

function shuffling(array) {
  let temptArray = array;
  for (let i = temptArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = temptArray[i];
    temptArray[i] = temptArray[j];
    temptArray[j] = temp;
  }
  return temptArray;
}

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      difficulty: "medium",
      question: null,
      answers: null,
      correctAnswer: "",
      answered: false,
      point: 0,
    };
  }

  componentDidMount() {
    this.newGame();
  }

  newGame() {
    let self = this;
    let difficulty = "medium";
    if (
      this.props.location.difficulty === "easy" ||
      this.props.location.difficulty === "hard"
    )
      difficulty = this.props.location.difficulty;
    console.log(otdb + `&difficulty=${difficulty}`);
    axios.get(otdb + `&difficulty=${difficulty}`).then(function (res) {
      // declare few variables
      let result = res.data.results[0];
      let answersHolder = [];

      // question logic and setting right answer
      let question = he.decode(result.question);
      let question_length = question.length > 94 ? "long" : "normal";

      // answer logic
      let correct_answer = he.decode(result.correct_answer);
      let correct_length = correct_answer.length > 100 ? "long" : "normal";
      let answer_object = { text: correct_answer, length: correct_length };
      answersHolder.push(answer_object);
      for (let answer of result.incorrect_answers) {
        let answer_text = he.decode(answer);
        let answer_length = answer_text.length > 100 ? "long" : "normal";
        answer_object = { text: answer_text, length: answer_length };
        answersHolder.push(answer_object);
      }

      let answers;
      if (result.type === "boolean") {
        answers = [
          { text: "True", length: "normal" },
          { text: "False", length: "normal" },
        ];
      } else {
        answers = shuffling([...answersHolder]);
      }
      // set states
      self.setState({
        question: {
          text: question,
          length: question_length,
        },
        correctAnswer: correct_answer,
        answers: [...answers],
      });
      self.setState({ isLoading: false });
    });
  }

  checkAnswer(value) {
    let self = this;
    let updatedAnswers = [];
    for (let answer of this.state.answers) {
      let selected = answer.text === value ? true : false;
      let correct = answer.text === this.state.correctAnswer ? true : false;
      answer = {
        text: answer.text,
        length: answer.length,
        selected: selected,
        correct: correct,
      };
      updatedAnswers.push(answer);
    }
    this.setState({ answers: updatedAnswers });
    this.setState({ answered: true });
    if (value === self.state.correctAnswer) {
      self.setState({ point: self.state.point + 1 });
    }
    setTimeout(function () {
      self.setState({
        isLoading: true,
        difficulty: "medium",
        question: null,
        answers: null,
        correctAnswer: "",
        answered: false,
      });

      self.newGame();
    }, 2500);
  }

  render() {
    let self = this;
    let answers_buttons;
    if (!this.state.isLoading) {
      if (!this.state.answered) {
        answers_buttons = this.state.answers.map((answer, index) => (
          <AnswerButton
            answerlenght={answer.length}
            key={index}
            onClick={() => self.checkAnswer(answer.text)}
            game={true}
          >
            {answer.text}
          </AnswerButton>
        ));
      } else {
        answers_buttons = this.state.answers.map((answer, index) => (
          <AnswerButton
            answerlenght={answer.length}
            key={index}
            correct={answer.correct}
            selected={answer.selected}
          >
            {answer.text}
            {answer.correct ? "✅" : ""}
            {answer.selected && !answer.correct ? "❌" : ""}
          </AnswerButton>
        ));
      }
    }
    return (
      <>
        {this.state.isLoading ? (
          <Spinner></Spinner>
        ) : (
          <GameWrapper>
            <GameImg src={questionsvg} />
            <GameButtonWrapper>
              <GameQuestion questionlenght={this.state.question.length}>
                {this.state.question.text}
              </GameQuestion>
              {answers_buttons}
            </GameButtonWrapper>
            <SettingsBack to="/settings">
              <BackArrow></BackArrow>
            </SettingsBack>
            <GameScore>Score: {this.state.point}</GameScore>
          </GameWrapper>
        )}
      </>
    );
  }
}

export default Game;
