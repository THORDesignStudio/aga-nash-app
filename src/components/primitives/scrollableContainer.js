import React from "react";
import styled from "styled-components";

const Container = styled.ScrollView`
  flex: ${(props) => props.flex || 1};
  display: flex;
  marginVertical: ${(props) => props.marginVertical || 20};
`;

const style = {
  wrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
};

export default function ScrollableView({ children, marginVertical,flex }) {
  return (
    <Container contentContainerStyle={style.wrapper} marginVertical={marginVertical} flex={flex}>{children}</Container>
  );
}
