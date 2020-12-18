import React, { useState } from "react";
import Timer from "./Timer";
import styled from "styled-components";
import TaskDate from "./TaskDate";

function Task(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState(props.task);

  const { updateTasksList, tasksList } = props;
  function handleEditChange(e, id) {
    setTask({ id, taskName: e.target.value });
  }

  function handleEdit() {
    setIsEdit(true);
  }

  function handleDelete(id) {
    const editedList = tasksList.filter((editTask) => {
      return editTask.id !== id;
    });
    window.localStorage.setItem("tasks", JSON.stringify(editedList));
    updateTasksList(editedList);
  }

  function editTask(id) {
    const editedList = tasksList.map((editTask) => {
      if (editTask.id === id) {
        editTask.taskName = task.taskName;
      }
      return editTask;
    });
    setIsEdit(false);
    window.localStorage.setItem("tasks", JSON.stringify(editedList));
    updateTasksList(editedList);
  }

  return (
    <StyledDiv>
      {!isEdit ? (
        <>
          <StyledNameDiv>
            <StyledName>{task.taskName}</StyledName>
            <TaskDate />
          </StyledNameDiv>

          <StyledEditButton onClick={handleEdit} data-testid="edit-button">
            Edit
          </StyledEditButton>
          <button
            onClick={() => handleDelete(task.id)}
            data-testid="delete-button"
          >
            Delete
          </button>
          <Timer />
        </>
      ) : (
        <>
          <input
            type="text"
            value={task.taskName}
            onChange={(e) => handleEditChange(e, task.id)}
            data-testid="edit-input"
          ></input>
          <button onClick={() => editTask(task.id)} data-testid="save-button">
            Save Changes
          </button>
        </>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
`;

const StyledNameDiv = styled.div`
  max-width: 500px;
  margin-left: 600px;
`;

const StyledName = styled.span`
  font-size: 30px;
  margin-right: 10px;
`;

const StyledEditButton = styled.button`
  margin-right: 10px;
`;

export default Task;
