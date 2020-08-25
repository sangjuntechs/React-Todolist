import React from 'react';
import { createGlobalStyle } from 'styled-components'
import TodoTemplateBlock from './components/TodoTemplate'
import TodoHeadBlock from './components/TodoHead'
import TodoListBlock from './components/TodoList'
import TodoCreate from './components/TodoCreate'


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
     <TodoTemplateBlock>
       <TodoHeadBlock />
       <TodoListBlock />
       <TodoCreate />
     </TodoTemplateBlock>
    </>
  );
}

export default App;
