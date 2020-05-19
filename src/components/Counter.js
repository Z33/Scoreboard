import React from "react";

const Counter = props => {
  let index = props.index;

  return (
    <div className="counter">
      <span className="score">{props.score}</span>
      <button className="inc" onClick={() => props.changeScore(index, 1)}>
        {" "}
        +{" "}
      </button>
      <button className="dec" onClick={() => props.changeScore(index, -1)}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Counter;
