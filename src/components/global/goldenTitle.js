import React from "react";
import styled from "styled-components/native";


/**
 * This component is used for pages with a title that have the gold banner background behnind them. In doesn't have
 * any sort of text params in order to keep things flexible. This only gives the gold background at the top of the page.
 * @param flex - determines the space that the title takes up in the page
 * @param children - You can place any type of box or title here.
 */

const Header = styled.View`
  flex: ${(props) => props.flex || .4};
  justifyContent: flex-start;
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
      <Background source={require("../../assets/images/NASH_bkgd_banner.png")}>
        {children}
      </Background>
    </Header>
  );
}
