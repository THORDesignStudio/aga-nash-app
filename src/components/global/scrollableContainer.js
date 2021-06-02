import React from "react";
import styled from "styled-components";

const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  marginVertical: 20;
`;

const style = {
  wrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
};

export default function ScrollableView({ children }) {
  return (
    <Container contentContainerStyle={style.wrapper}>{children}</Container>
  );
}
