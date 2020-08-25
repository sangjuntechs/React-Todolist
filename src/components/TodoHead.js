import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top:20px;
    padding-right:32px;
    padding-left:32px;
    padding-bottom:24px;
    border-bottom: 1.5px solid darkgray;

    h1 {
        margin:0;
        font-size:36px;
        color: black;
    }

    .day {
        margin-top: 5px;
        color: gray;
        font-size: 21px;
    }

    .task-left {
        color: #63e6be;
        font-size: 18px;
        margin-top: 40px;
        font-weight: 600;
    }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2020년 8월 25일</h1>
            <div className='day'>화요일</div>
            <div className='task-left'>할 일 2개남음.</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;