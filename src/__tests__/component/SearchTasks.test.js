import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchTask from "../../component/SearchTask";
import "@testing-library/jest-dom";

describe("<SearchTasks/>", () => {
  describe("Success", () => {
    it("should renders search button and input fields", () => {
      const { getByTestId } = render(<SearchTask />);
      expect(getByTestId("search-input")).toBeInTheDocument();
      expect(getByTestId("search-button")).toBeInTheDocument();
    });

    it("should search a task", () => {
      const updateTasksList = jest.fn();
      const tasksList = [{ id: 1, taskName: "dummy Task" }];
      const { getByTestId } = render(
        <SearchTask updateTasksList={updateTasksList} tasksList={tasksList} />
      );
      const searchInput = getByTestId("search-input");
      const searchButton = getByTestId("search-button");
      fireEvent.change(searchInput, { target: { value: "dummy Task" } });
      fireEvent.click(searchButton);
    });

    it("should search all tasks", () => {
      const updateTasksList = jest.fn();

      const tasksList = [{ id: 1, taskName: "dummy Task" }];
      const { getByTestId } = render(
        <SearchTask updateTasksList={updateTasksList} tasksList={tasksList} />
      );
      const searchInput = getByTestId("search-input");
      const searchButton = getByTestId("search-button");
      fireEvent.change(searchInput, { target: { value: "" } });
      fireEvent.click(searchButton);
    });
  });
});
