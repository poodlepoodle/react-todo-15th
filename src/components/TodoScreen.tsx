import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import StatusBar from "./TodoStatusBar";
import Title from "./TodoTitle";
import ScrollView from "./TodoScrollView";

import * as Icons from "./Icons";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 650px;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  & ::-moz-scrollbar {
    display: none;
  }

  & {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
  }

  color: black;
  text-align: center;
  border-radius: 30px;
  background: #abc2d0;
  box-shadow: 0 1rem 4rem hsl(0 0% 0% / 60%);

  ${({ darkMode }) =>
    darkMode &&
    `
    background: #262628;
  `}
`;

const ScreenHeader = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ScreenContent = styled.main`
  flex: 7;
  width: 100%;
  z-index: 1000 !important;
`;

const ScreenFooter = styled.footer`
  flex: 0.9;
  width: 100%;
  background: white;

  ${({ darkMode }) =>
    darkMode &&
    `
  background: #2c2c2e;
`}
`;

const InputWrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 13px 0px 13px;
`;

const TodoInput = styled.input`
  text-align: left;
  border-color: transparent;
  border-radius: 10px;
  outline: none;
  width: 220px;
  height: 30px;
  padding: 0 0 0 10px;
  background-color: #ededed;
  font-size: 11px;
  font-weight: 400;

  ${({ darkMode }) =>
    darkMode &&
    `
    color: white;
    background: #38383a;
  `}
`;

const TodoInputForm = styled.form`
  z-index: 1000 !important;
`;

const TodoInputSend = styled.div`
  width: 26px;
  height: 26px;
  object-fit: contain;
  opacity: 0.5;
  z-index: 1000 !important;
`;

const TodoInputSendImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: cover;
`;

const initialTodos = [];

const TodoScreen = ({ darkMode, ...props }) => {
  const [todos, setTodos] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("localStorageTodos")) ||
      initialTodos
  );
  const [todosId, setTodosId] = useState(todos.length + 1);
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    window.localStorage.setItem("localStorageTodos", JSON.stringify(todos));
  }, ["localStorageTodos", todos]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content !== "") {
      const newTodo = {
        id: todosId,
        time:
          ("0" + date.getHours()).substr(-2) +
          ":" +
          ("0" + date.getMinutes()).substr(-2),
        text: content,
        completed: false,
      };

      setTodosId(todosId + 1);

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setContent("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];

    for (let idx = 0; idx < newTodos.length; idx++) {
      if (newTodos[idx].id === id) {
        newTodos[idx].completed = !newTodos[idx].completed;
      }
    }
    setTodos(newTodos);
  };

  return (
    <ScreenWrapper darkMode={darkMode}>
      <ScreenHeader>
        <StatusBar date={date} darkMode={darkMode} />
        <Title darkMode={darkMode} />
      </ScreenHeader>

      <ScreenContent>
        <ScrollView
          date={date}
          darkMode={darkMode}
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </ScreenContent>

      <ScreenFooter darkMode={darkMode}>
        <InputWrapper>
          <TodoInputForm onSubmit={handleSubmit}>
            <TodoInput
              type="text"
              autoFocus
              value={content}
              darkMode={darkMode}
              placeholder="일정을 입력해 주세요!"
              onChange={handleChange}
            />
          </TodoInputForm>
          <TodoInputSend onClick={handleSubmit}>
            {darkMode ? (
              <TodoInputSendImg src={Icons.WhiteArrow} />
            ) : (
              <TodoInputSendImg src={Icons.BlackArrow} />
            )}
          </TodoInputSend>
        </InputWrapper>
      </ScreenFooter>
    </ScreenWrapper>
  );
};

export default TodoScreen;
