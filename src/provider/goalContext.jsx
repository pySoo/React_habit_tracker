import React, { useReducer, createContext, useContext, useRef } from "react";

const GoalStateContext = createContext();
const GoalDispatchContext = createContext();
const GoalNextIdContext = createContext();

export const GoalProvider = ({ children }) => {
  const goalReducer = (state, action) => {
    switch (action.command) {
      case "CREATE":
        return state.concat(action.goal);
      case "REMOVE":
        return state.filter((goal) => goal.id !== action.id);
      default:
        throw new Error(`Unhandled action type: ${action.goal}`);
    }
  };
  const [state, dispatch] = useReducer(goalReducer, []);
  const nextId = useRef(1);
  return (
    <GoalStateContext.Provider value={state}>
      <GoalDispatchContext.Provider value={dispatch}>
        <GoalNextIdContext.Provider value={nextId}>
          {children}
        </GoalNextIdContext.Provider>
      </GoalDispatchContext.Provider>
    </GoalStateContext.Provider>
  );
};

export const UseGoalState = () => {
  return HandleContext(GoalStateContext);
};

export const UseGoalDispatch = () => {
  return HandleContext(GoalDispatchContext);
};

export const UseGoalNextId = () => {
  return HandleContext(GoalNextIdContext);
};

const HandleContext = (eachContext) => {
  const context = useContext(eachContext);
  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
};
