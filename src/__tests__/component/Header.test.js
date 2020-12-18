import React from "react";
import { render } from "@testing-library/react";
import Header from "../../component/Header";
import "@testing-library/jest-dom";

describe("<Header/>", () => {
  describe("Success", () => {
    it("should renders the Timer App text", () => {
      const { getByText } = render(<Header />);
      expect(getByText("Timer App")).toBeInTheDocument();
    });
  });
});
