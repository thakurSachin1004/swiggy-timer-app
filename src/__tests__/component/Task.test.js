import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Task from "../../component/Task";
import "@testing-library/jest-dom";

describe("<Task/>", () => {
  const tasksList = [{ id: 1, taskName: "dummy Task" }];
  const updateTasksList = jest.fn();

  describe("Success", () => {
    it("should renders task", () => {
      const { getByText } = render(
        <Task
          updateTasksList={updateTasksList}
          tasksList={tasksList}
          task={{ id: 1, taskName: "dummy Task" }}
        />
      );
      expect(getByText("dummy Task")).toBeInTheDocument();
    });

    it("should add a task", () => {
      const { getByTestId } = render(
        <Task
          updateTasksList={updateTasksList}
          tasksList={tasksList}
          task={{ id: 1, taskName: "dummy Task" }}
        />
      );
      const editButton = getByTestId("edit-button");
      fireEvent.click(editButton);
      const editInput = getByTestId("edit-input");
      const saveButton = getByTestId("save-button");
      fireEvent.change(editInput, { target: { value: "updated task" } });
      fireEvent.click(saveButton);
      expect(editInput).toHaveValue("updated task");
    });

    it("should delete a task", () => {
      const updateTasksList = jest.fn();

      const { getByTestId } = render(
        <Task
          updateTasksList={updateTasksList}
          tasksList={tasksList}
          task={{ id: 1, taskName: "dummy Task" }}
        />
      );
      const deleteButton = getByTestId("delete-button");
      fireEvent.click(deleteButton);
    });
  });
});
