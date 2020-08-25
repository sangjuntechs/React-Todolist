import React from 'react';
import styled from 'styled-components';
import TodoItemBlock from './TodoItem'

const TodoListBlock = styled.div`
    flex: 1;
    padding:20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItemBlock text='리액트 공부하기'/>
            <TodoItemBlock text='자바스크립트 공부하기' done={true}/>
            <TodoItemBlock text='교수님 면담하기.'/>
        </TodoListBlock>
    )
}

export default TodoList;