import React from "react";
import styled from "styled-components";

const TypeTemplate = ({ children }) => {
  const TodoTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;

    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 9.6rem;
    margin-bottom: 3.2rem;
  `;
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TypeTemplate;
