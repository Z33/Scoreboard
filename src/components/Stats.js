import React from "react";
import propTypes from "prop-types";

const Stats = (props) => {
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

Stats.propTypes = {
    players: propTypes.arrayOf(
        propTypes.shape({
            score: propTypes.number,
        })
    ),
};

export default Stats;
