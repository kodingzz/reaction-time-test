import { useRef, useState } from "react";
import Result from "./Result";

const randomTime = Math.random() * 3 + 3; // 3~5초사이

export default function Main() {
  const timer = useRef();
  const [timeRemaining, setTimeRemaining] = useState(randomTime * 1000);
  const [timeStart, setTimeStart] = useState(0);
  const [condition, setCondition] = useState("start");

  const timerIsWaiting = timeRemaining > 0 && timeRemaining < randomTime * 1000;

  if (timeRemaining <= 0) {
    setCondition("click");
    setTimeRemaining(randomTime * 1000);
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setTimeStart((prev) => prev + 10);
    }, 10);
  }

  // 버튼을 눌렀을때 (테스트 시작)
  function handleBtnStart() {
    setCondition("wait");
    setTimeStart(0);
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  function handleBtnRestart() {
    setCondition("restart");
    clearInterval(timer.current);
  }
  //  기다리는 중에 버튼을 눌렀을 때
  function handleBtnCancel() {
    setCondition("fail");
    setTimeRemaining(randomTime * 1000);
    clearInterval(timer.current);
  }

  return (
    <Result
      condition={condition}
      onClick={
        timerIsWaiting
          ? handleBtnCancel
          : condition === "restart" || timeStart === 0
          ? handleBtnStart
          : handleBtnRestart
      }
      time={timeStart}
    />
  );
}
