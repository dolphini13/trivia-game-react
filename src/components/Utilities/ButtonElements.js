import styled from "styled-components";
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

export const AnswerButton = styled(Link)`
  border-radius: 50px;
  background: ${theme.colors.darkBlue};
  padding: 12px 32px;
  color: ${theme.colors.floralWhite};
  font-size: ${theme.fonts.desktop.h4};
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

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.darkBlue};
    background: ${theme.colors.floralWhite};
  }

  @media screen and (max-width: 768px) {
    padding: 6px 18px;
    font-size: ${theme.fonts.desktop.body};
  }
`;
