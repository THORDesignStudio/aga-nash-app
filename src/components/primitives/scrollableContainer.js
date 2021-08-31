import React from "react";
import styled from "styled-components/native";

/**
 * @param flex - space the container takes up on the page
 * @param marginVertical - sets the margin at the top and bottom of the component
 *
 */

const Container = styled.ScrollView`
  flex: ${(props) => props.flex || '1px'};
  /* marginVertical: ${(props) => props.marginVertical || 20}; */
`;

const style = {
  wrapper: {
    justifyContent: "flex-start",
    // flex: '100%',
  },
};

export default function ScrollableView({ children, marginVertical, flex }) {
  return (
    <Container
      contentContainerStyle={style.wrapper}
      marginVertical={marginVertical}
      flex={flex}
      persistentScrollbar={true}
    >
      {children}
    </Container>
  );
}
