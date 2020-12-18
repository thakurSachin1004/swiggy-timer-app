import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Timer = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isTimerActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerActive, counter]);

  function startTimer() {
    setIsTimerActive(true);
  }

  function pauseTimer() {
    setIsTimerActive(false);
  }

  function resetTimer() {
    setSecond("00");
    setMinute("00");
    setIsTimerActive(false);
    setCounter(0);
  }
  return (
    <>
      <StyledTimerDiv>
        <span>{minute}</span>
        <span>:</span>
        <span>{second}</span>
      </StyledTimerDiv>
      <StyledDiv>
        <StyledButtonDiv>
          {isTimerActive ? (
            <StyledStartButton onClick={pauseTimer} data-testid="pause-button">
              Pause
            </StyledStartButton>
          ) : (
            <StyledStartButton
              onClick={startTimer}
              className="start"
              data-testid="start-button"
            >
              Start
            </StyledStartButton>
          )}
          <button
            onClick={resetTimer}
            className="reset"
            data-testid="reset-button"
          >
            Reset
          </button>
        </StyledButtonDiv>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  display: inline-block;
`;

const StyledButtonDiv = styled.div`
  margin-left: 10px;
`;

const StyledTimerDiv = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  transform: translateX(1px);
  display: inline-block;
  margin-left: 30px;
`;

const StyledStartButton = styled.button`
  margin-right: 20px;
`;
export default Timer;
