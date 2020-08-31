import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from '../TodoContext';

const CheckCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1.2px solid #495057;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1.2px solid #63e6be;
      color: #63e6be;
    `}
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #495057;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 18px;
  color: black;
  ${(props) =>
    props.done &&
    css`
      color: darkgray;
    `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id
    })
  }

  const onRemove = () => dispatch({
    type: 'REMOVE',
    id
  })

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}><MdDelete /></Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
