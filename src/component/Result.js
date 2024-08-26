import result from "./Result.module.css";
import start from "../assets/start.svg";
import wait from "../assets/wait.svg";
import click from "../assets/click.svg";
import restart from "../assets/restart.svg";
import error from "../assets/error.svg";

export default function Result({ condition, time, onClick }) {
  return (
    <div
      id={result.content}
      onClick={onClick}
      className={
        condition === "wait"
          ? `${result.red}`
          : condition === "click"
          ? `${result.green}`
          : 1
      }
    >
      <div className={result.description}>
        {condition === "start" ? (
          <>
            <img src={start} alt="main logo" width="120px" />
            <h1>Reaction Time Test</h1>
            <p>When the red box turns green, click as quickly as you can.</p>
            <p>Click anywhere to start.</p>
          </>
        ) : condition === "wait" ? (
          <>
            <img src={wait} alt="wait logo" width="120px" />
            <h1>Wait for green</h1>
          </>
        ) : condition === "click" ? (
          <>
            <img src={click} alt="click logo" width="120px" />

            <h1>Click!</h1>
          </>
        ) : condition === "restart" ? (
          <>
            <img src={restart} alt="restart logo" width="120px" />

            <h1>{`${time} ms`}</h1>
            <p>Click to keep going</p>
          </>
        ) : (
          <>
            <img src={error} alt="error logo" width="120px" />

            <h1>Too soon!</h1>
            <p>Click to try again</p>
          </>
        )}
      </div>
    </div>
  );
}
