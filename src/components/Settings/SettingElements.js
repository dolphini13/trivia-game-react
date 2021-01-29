import styled from "styled-components";
import { Link } from "react-router-dom";

export const SettingsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
`;

export const SettingsButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  -webkit-flex-direction: column;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const SettingsSvg = styled.img`
  margin-bottom: 20px;
  width: 350px;
  align-self: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SettingsSvgPhone = styled.img`
  display: none;
  @media screen and (max-width: 1000px) {
    display: inline-block;
  }
`;

export const SettingsImage = styled.img`
  margin-left: 100px;
  height: 500px;
  @media screen and (max-width: 1000px) {
    height: 300px;
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SettingsBack = styled(Link)`
  cursor: pointer;
`;
