import React from "react";
import styled from "styled-components/native";

const PrimitiveButton = styled.Button`
width: ${props => props.width || "30px"};
color: black;
background-color: ${props => props.bgColor || "white"};
border: ${props => props.border || '1px solid black'};
`;

/*
 *
 * @param {string} buttonAlign - move the button's main axis via flexbox justify-content (default: flex-start)
 * @param {string} buttonBg - override for button background (default: white)
 * @param {string} buttonBgHover - override for button background on hover (default: black)
 * @param {string} buttonBorder - override for button border (default: black)
 * @param {string} buttonColor - override for button color (default: black)
 * @param {string} buttonColorHover - override for button text color on hover (default: white)
 * @param {string} buttonFontSize - override for button text size (default: 16-24px)
 * @param {string} buttonMargin - override for button margins (default: 16-24px)
 * @param {string} buttonPadding - override for button text padding settings (default: 10px 35px)
 * @param {string} buttonTextTransform - changes casing of button text (default: uppercase)
 * @param {string} className - allows styled-components to extend this component
 */

export default function BasicButton({
  title,
  children,
  border,
  color,
  bgColor
}) {
  /**
   * React-Aria, useButton hook
   *
   * Provides the behavior and accessibility implementation for a button component.
   * Handles mouse, keyboard, and touch interactions, focus behavior, and ARIA props for both native button elements and custom element types.
   */

  return (
        <PrimitiveButton title={title} border={border} color={color} bgColor={bgColor}>
          {children}
        </PrimitiveButton>
  );
}
