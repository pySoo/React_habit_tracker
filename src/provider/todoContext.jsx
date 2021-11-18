import React, { useReducer, createContext, useContext, useRef } from "react";

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const todoReducer = (state, action) => {
    switch (action.command) {
      case "CREATE":
        return state.concat(action.todo);
      case "TOGGLE":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        );
      case "REMOVE":
        return state.filter((todo) => todo.id !== action.id);

      case "REMOVE_GOAL":
        return state.filter((todo) => todo.goalId !== action.goalId);
      default:
        throw new Error(`Unhandled action type: ${action.goal}`);
    }
  };
  const [state, dispatch] = useReducer(todoReducer, []);
  const nextId = useRef(1);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const UseTodoState = () => {
  return HandleContext(TodoStateContext);
};

export const UseTodoDispatch = () => {
  return HandleContext(TodoDispatchContext);
};

export const UseTodoNextId = () => {
  return HandleContext(TodoNextIdContext);
};

const HandleContext = (eachContext) => {
  const context = useContext(eachContext);
  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
};
