import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Timer from "../../component/Timer";
import "@testing-library/jest-dom";

describe("<Timer>", () => {
  describe("Success", () => {
    it("should start a timer", () => {
      const { getByTestId } = render(<Timer />);
      jest.useFakeTimers();
      const startButton = getByTestId("start-button");
      const resetButton = getByTestId("reset-button");
      fireEvent.click(startButton);
      const pauseButton = getByTestId("pause-button");
      expect(pauseButton).toBeInTheDocument();
      fireEvent.click(pauseButton);
      fireEvent.click(resetButton);
    });
  });
});
