import React, { Component } from "react";
import {
  SettingsWrapper,
  SettingsButtonWrapper,
  SettingsImage,
  SettingsSvg,
  SettingsSvgPhone,
  SettingsBack,
} from "./SettingElements";
import { BackArrow, Button } from "../Utilities/ButtonElements";
import guySelect from "../../images/guy_select.svg";
import selectDiff from "../../images/selectdifficulty.svg";
import selectDiffPhone from "../../images/selectdifficulty_phone.svg";

export class Settings extends Component {
  render() {
    return (
      <SettingsWrapper>
        <SettingsButtonWrapper>
          <SettingsSvg src={selectDiff}></SettingsSvg>
          <SettingsSvgPhone src={selectDiffPhone}></SettingsSvgPhone>
          <Button to={{ pathname: "/game", difficulty: "easy" }}>Easy</Button>
          <Button to={{ pathname: "/game", difficulty: "medium" }}>
            Medium
          </Button>
          <Button to={{ pathname: "/game", difficulty: "hard" }}>Hard</Button>
        </SettingsButtonWrapper>
        <SettingsImage src={guySelect} />
        <SettingsBack to="/">
          <BackArrow></BackArrow>
        </SettingsBack>
      </SettingsWrapper>
    );
  }
}

export default Settings;
