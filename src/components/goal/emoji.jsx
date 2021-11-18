import React from "react";
import styled from "styled-components";
const Emoji = ({ symbol, label, padding, size }) => {
  const EmojiWrapper = styled.span`
    padding: ${padding};
    font-size: ${size};
  `;
  return (
    <EmojiWrapper
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </EmojiWrapper>
  );
};
export default Emoji;
