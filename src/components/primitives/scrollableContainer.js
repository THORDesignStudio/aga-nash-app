import React from "react";
import styled from "styled-components";

/**
 * @param flex - space the container takes up on the page
 * @param marginVertical - sets the margin at the top and bottom of the component
 *
 */

const Container = styled.ScrollView`
  flex: ${(props) => props.flex || 1};
  display: flex;
  marginvertical: ${(props) => props.marginVertical || 20};
`;

const style = {
  wrapper: {
    justifyContent: "flex-start",
  },
};

export default function ScrollableView({ children, marginVertical, flex }) {
  return (
    <Container
      contentContainerStyle={style.wrapper}
      marginVertical={marginVertical}
      flex={flex}
    >
      {children}
    </Container>
  );
}
