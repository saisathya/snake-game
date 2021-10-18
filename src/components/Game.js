import React, { useEffect, useRef, useState } from "react";
import { useInterval } from "../lib/util";
import Cell from "./Cell";

const DIRECTION = {
  ArrowRight: [0, 1],
  ArrowLeft: [0, -1],
  ArrowDown: [1, 0],
  ArrowUp: [-1, 0],
  " ": [0, 0],
};

const Game = () => {
  let [board, setBoard] = useState([]);
  let [snake, setSnake] = useState([]);
  let [direction, setDirection] = useState([0, 0]);

  useEffect(() => {
    let newSnake = [[12, 12]];
    setSnake(newSnake);
    window.addEventListener("keydown", (e) => {
      console.log("changing direction");
      setDirection(DIRECTION[e.key]);
    });
  }, []);

  useEffect(() => {
    console.log("drawing board");
    let newBoard = [];
    for (let i = 0; i < 25; i++) {
      let arr = [];
      for (let j = 0; j < 25; j++) {
        arr.push("empty");
      }
      newBoard.push(arr);
    }

    for (let i = 0; i < snake.length; i++) {
      newBoard[snake[i][0]][snake[i][1]] = "snake";
    }
    setBoard(newBoard);
  }, [snake]);

  useInterval(() => {
      setSnake((snake) =>
        snake.map((ele) => [ele[0] + direction[0], ele[1] + direction[1]])
      );
  }, 150);

  return (
    <div>
      {board.map((cells, i) => {
        return (
          <div
            key={i}
            className="row"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {cells.map((cell, j) => {
              return <Cell key={25 * i + j} value={cell} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
