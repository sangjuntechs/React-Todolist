import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성",
    done: true,
  },
  {
    id: 2,
    text: "프로젝트 생성2",
    done: true,
  },
  {
    id: 3,
    text: "프로젝트 생성3",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error(`Error in ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContexnt = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(4);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContexnt.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContexnt.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext)
  if(!context) {
      throw new Error('cannot find TodoProvider')
  }
  return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContexnt)
    if(!context) {
        throw new Error('cannot find TodoProvider')
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext)
    if(!context) {
        throw new Error('cannot find TodoProvider')
    }
    return context;
}
