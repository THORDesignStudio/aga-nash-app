import React from "react";
import styled from "styled-components/native";

const Header = styled.View`
  flex: ${(props) => props.flex || .6};
  justifyContent: center;
  alignItems: center;
`;

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justifyContent: center;
  alignItems: center;
`;

export default function GoldenTitle({ children, flex }) {
  return (
    <Header flex={flex}>
      <Background source={require("../../assets/images/NASH_bkgd.png")}>
        {children}
      </Background>
    </Header>
  );
}
