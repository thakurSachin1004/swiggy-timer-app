import React from "react";
import styled from "styled-components";

function TaskDate() {
  function padWithZero(element) {
    if (element < 10) {
      return `0${element}`;
    }
    return element;
  }

  const date = new Date();
  const month = padWithZero(date.getMonth());
  const year = date.getFullYear();
  const day = padWithZero(date.getDay());
  return (
    <StyledDate>
      {day}-{month}-{year}
    </StyledDate>
  );
}

const StyledDate = styled.span`
  font-size: 20px;
`;

export default TaskDate;
