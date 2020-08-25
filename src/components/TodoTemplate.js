import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 700px;

  position: relative;
  background: white;
  border-radius: 15px;
  box-shadow: 2px 4px 8px gray;

  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  border: 1.25px solid darkgray;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
