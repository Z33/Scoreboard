import React from "react";
import PropTypes from "prop-types";

const Stats = props => {
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <div className="stats">
      <div className="totalPlayers">
        <span className="label">Players:</span>{" "}
        <span className="value">{totalPlayers}</span>
      </div>
      <div className="totalPoints">
        <span className="label">Points:</span>{" "}
        <span className="value">{totalPoints}</span>
      </div>
    </div>
  );
};

Stats.PropTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number
    })
  )
};

export default Stats;
