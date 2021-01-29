import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  align-items: center;
`;

export const MainPic = styled.img`
  height: 400px;
  width: 700px;

  @media screen and (max-width: 1200px) {
    height: 300px;
    width: 600px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const MainPicAlt = styled.img`
  display: none;

  @media screen and (max-width: 1000px) {
    display: inline-block;
    height: 250px;
    width: 500px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px) {
    height: 220px;
    width: 280px;
  }
`;

export const MainButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
