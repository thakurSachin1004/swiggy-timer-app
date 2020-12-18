import React from "react";
import { fireEvent, render } from "@testing-library/react";
import AddTask from "../../component/AddTask";
import "@testing-library/jest-dom";

describe("<Add Task/>", () => {
  describe("Success", () => {
    it("should add a task", () => {
      const { getByTestId } = render(<AddTask />);
      const addInput = getByTestId("add-input");
      const addButton = getByTestId("add-button");
      fireEvent.change(addInput, { target: { value: "new task" } });
      fireEvent.click(addButton);
    });
  });
});
