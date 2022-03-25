import React from "react";
import styled from "styled-components";

import TodoListItem from "./TodoListItem";

const TodoListTemplateWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const TodoListTemplate = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <TodoListTemplateWrapper>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListTemplateWrapper>
  );
};

export default TodoListTemplate;
