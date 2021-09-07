import React from "react";
import styled from "styled-components/native";

/**
 * 
 * <ScrollableView>
 * 
 * @param { string } flex - space the container takes up on the page
 * @param { string } marginVertical - sets the margin at the top and bottom of the component
 *
 */

const Container = styled.ScrollView`
  flex: ${(props) => props.flex || '1px'};
  marginVertical: ${(props) => props.marginVertical || 0};
`;

const style = {
  wrapper: {
    justifyContent: "flex-start",
  },
};

export default function ScrollableView({ 
  children, 
  marginVertical, 
  flex 
}) {
  return (
    <Container
      contentContainerStyle={style.wrapper}
      marginVertical={marginVertical}
      flex={flex}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </Container>
  );
}
