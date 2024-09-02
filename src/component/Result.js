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
        <img
          src={
            condition === "start"
              ? start
              : condition === "wait"
              ? wait
              : condition === "click"
              ? click
              : condition === "restart"
              ? restart
              : error
          }
          alt="logo"
          width="120px"
        />
        <h1>
          {condition === "start"
            ? "Reaction Time Test"
            : condition === "wait"
            ? "Wait for green"
            : condition === "click"
            ? "Click!"
            : condition === "restart"
            ? `${time} ms`
            : "Too Soon!"}
        </h1>
        <p>
          {condition === "start"
            ? "When the red box turns green, click as quickly as you can." +
              " Click anywhere to start."
            : condition === "wait"
            ? ""
            : condition === "click"
            ? ""
            : condition === "restart"
            ? "Click to keep going"
            : "Click to try again"}
        </p>
      </div>
    </div>
  );
}
