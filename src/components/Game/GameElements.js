import styled from "styled-components";
import { Link } from "react-router-dom";

export const GameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
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

export const GameImg = styled.img`
  margin-right: 100px;
  height: 400px;
  @media screen and (max-width: 1000px) {
    height: 300px;
    margin-right: 50px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SettingsBack = styled(Link)`
  cursor: pointer;
`;
