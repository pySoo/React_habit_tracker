import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/header";
import GoalList from "./components/goal/goalList";
import GoalTemplate from "./components/goal/goalTemplate";
import { TodoProvider } from "./provider/todoContext";
import { GoalProvider } from "./provider/goalContext";
import GoalInput from "./components/goal/goalInput";

const App = (props) => {
  const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
  return (
    <>
      <GoalProvider>
        <TodoProvider>
          <GlobalStyle />
          <GoalTemplate>
            <Header />
            <GoalList />
            <GoalInput />
          </GoalTemplate>
        </TodoProvider>
      </GoalProvider>
    </>
  );
};

export default App;
