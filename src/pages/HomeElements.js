import styled from "styled-components";
import theme from "../theme/Theme";

export const HomeComponent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.shadowBlue};
  height: 75vh;
  width: 65vw;
  border-radius: 30px;
  -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.32);
  min-height: 525px;
  min-width: 300px;
`;
