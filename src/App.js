import React from 'react';
import { createGlobalStyle } from 'styled-components'
import TodoTemplateBlock from './components/TodoTemplate'
import TodoHeadBlock from './components/TodoHead'
import TodoListBlock from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import { TodoProvider } from './TodoContext'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
    <GlobalStyle />
     <TodoTemplateBlock>
       <TodoHeadBlock />
       <TodoListBlock />
       <TodoCreate />
     </TodoTemplateBlock>
    </TodoProvider>
  );
}

export default App;
