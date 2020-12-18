import React from "react";
import { render } from "@testing-library/react";
import Date from "../../component/TaskDate";
import "@testing-library/jest-dom";

describe("<Date/>", () => {
  describe("Success", () => {
    it("should renders the Datew component", () => {
      render(<Date />);
    });
  });
});
