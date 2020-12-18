import React, { useState } from "react";
import styled from "styled-components";

function SearchTask({ updateTasksList, tasksList }) {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue.length) {
      const searchedTasks = tasksList.filter(
        (task) => task.taskName === searchValue
      );
      updateTasksList(searchedTasks);
    } else {
      const allTasks = window.localStorage.getItem("tasks");
      updateTasksList(JSON.parse(allTasks));
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        data-testid="search-input"
      />
      <button type="submit" data-testid="search-button">
        Search Task
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-top: 20px;
`;

const StyledInput = styled.input`
  margin-right: 5px;
  height: 20px;
  border-radius: 3px;
  outline: none;
`;

export default SearchTask;
