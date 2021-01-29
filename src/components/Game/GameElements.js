import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../theme/Theme";

export const GameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation: fadein 1.5s;
  -moz-animation: fadein 1.5s; /* Firefox */
  -webkit-animation: fadein 1.5s; /* Safari and Chrome */
  -o-animation: fadein 1.5s; /* Opera */
`;

export const GameButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  -webkit-flex-direction: column;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const GameQuestion = styled.div`
  font-size: ${(props) =>
    props.questionlenght === "long"
      ? theme.fonts.desktop.h4
      : theme.fonts.desktop.h3};
  width: 400px;
  align-self: center;
  text-align: center;
  margin-bottom: 10px;
  max-height: 136px;

  @media screen and (min-width: 1919px) {
    width: 500px;
  }

  @media screen and (max-width: 1366px) {
    width: 300px;
    font-size: ${theme.fonts.desktop.h4};
    margin-bottom: 5px;
  }
`;

export const GameImg = styled.img`
  margin-right: 100px;
  height: 400px;

  @media screen and (max-width: 1366px) {
    height: 200px;
    margin-right: 25px;
  }

  @media screen and (max-width: 950px) {
    height: 180px;
    margin-right: 25px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SettingsBack = styled(Link)`
  cursor: pointer;
`;
