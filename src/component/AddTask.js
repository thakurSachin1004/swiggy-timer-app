import React, { useState, useEffect } from "react";
import Task from "./Task";
import styled from "styled-components";
import SearchTask from "./SearchTask";

function AddTask() {
  const [newTask, setNewTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [isTaskCreated, setIsTaskCreated] = useState(false);

  useEffect(() => {
    const tasksFromStorage = window.localStorage.getItem("tasks");
    if (tasksFromStorage) {
      setTasksList(JSON.parse(tasksFromStorage));
    }
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    setIsTaskCreated(true);
    let createdTask = {
      id: tasksList.length + 1,
      taskName: newTask,
    };
    setTasksList([...tasksList, createdTask]);
    window.localStorage.setItem(
      "tasks",
      JSON.stringify([...tasksList, createdTask])
    );
    setNewTask("");
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <StyledInput
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          data-testid="add-input"
        />
        <button
          type="submit"
          disabled={!newTask.length}
          data-testid="add-button"
        >
          Add Task
        </button>
      </form>
      <SearchTask updateTasksList={setTasksList} tasksList={tasksList} />
      {tasksList &&
        tasksList.map((task) => (
          <Task
            task={task}
            key={task.id}
            updateTasksList={setTasksList}
            tasksList={tasksList}
          />
        ))}
      {!tasksList.length && <h1>No Tasks! </h1>}
    </>
  );
}

const StyledInput = styled.input`
  margin-right: 5px;
  height: 20px;
  border-radius: 3px;
  outline: none;
`;

export default AddTask;
