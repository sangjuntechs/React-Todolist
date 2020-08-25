import React from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background-color: #63e6be;
  &:hover {
    background-color: #96f2d7;
  }
  &:active {
    background-color: #12b886;
  }

  z-index: 1;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 50%;

  border: none;
  outline: none;
  box-shadow: 2px 4px 6px darkgray;
`;

function TodoCreate() {
  return (
    <CircleButton>
      <MdAdd />
    </CircleButton>
  );
}

export default TodoCreate;
