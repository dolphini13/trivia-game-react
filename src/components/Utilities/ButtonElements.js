import styled, { keyframes } from "styled-components";
import theme from "../../theme/Theme";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${theme.colors.darkBlue};
  padding: 12px 32px;
  color: ${theme.colors.floralWhite};
  font-size: ${theme.fonts.desktop.h3};
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.darkBlue};
    background: ${theme.colors.floralWhite};
  }

  @media screen and (max-width: 768px) {
    padding: 12px 32px;
    font-size: ${theme.fonts.desktop.h4};
  }
`;

export const BackArrow = styled(FaArrowCircleLeft)`
  position: absolute;
  top: 97%;
  left: 0;
  padding-left: 20px;
  padding-bottom: 20px;
  transform: translateY(-50%);
  color: ${theme.colors.darkBlue};
  width: 30px;
  height: 30px;
  transition: 0.2s all ease;

  &:hover {
    fill: ${theme.colors.blue};
  }
`;

export const AnswerButton = styled.a`
  border-radius: 50px;
  background: ${(props) =>
    props.selected ? theme.colors.floralWhite : theme.colors.darkBlue};
  padding: 12px 32px;
  color: ${(props) =>
    props.selected ? theme.colors.darkBlue : theme.colors.floralWhite};
  font-size: ${(props) =>
    props.answerlenght === "long"
      ? theme.fonts.mobile.body
      : theme.fonts.mobile.h4};
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 52px;
  text-align: center;
  overflow: hidden;

  ${(props) =>
    props.correct
      ? `
    color: ${theme.colors.floralWhite};
    background: ${theme.colors.purple} !important;
  }`
      : ""};

  ${(props) =>
    props.game
      ? `&:hover {
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.darkBlue};
    background: ${theme.colors.floralWhite};
  }`
      : ""};

  @media screen and (max-width: 768px) {
    padding: 6px 18px;
    font-size: ${(props) =>
      props.answerlenght === "long"
        ? theme.fonts.mobile.tiny
        : theme.fonts.desktop.body};
    //font-size: ${theme.fonts.desktop.body};
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 3px solid ${theme.colors.floralWhite};
  border-right: 3px solid ${theme.colors.floralWhite};
  border-bottom: 3px solid ${theme.colors.floralWhite};
  border-left: 6px solid ${theme.colors.darkBlue};
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
