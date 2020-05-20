import React, { PureComponent } from "react";
import propTypes from "prop-types";

import Counter from "./Counter";
import Crown from "./Crown";

class Player extends PureComponent {
    static propTypes = {
        changeScore: propTypes.func,
        removePlayer: propTypes.func,
        name: propTypes.string,
        score: propTypes.number,
        id: propTypes.number,
        index: propTypes.number,
    };

    render() {
        return (
            <div className="player">
                <div className="remove">
                    <button
                        className="drop"
                        onClick={() => this.props.removePlayer(this.props.id)}
                    >
                        {" "}
                        ✖{" "}
                    </button>
                </div>

                <Crown isHighScore={this.props.isHighScore} />

                <div className="name">
                    <h3>{this.props.name}</h3>
                </div>

                <Counter
                    index={this.props.index}
                    score={this.props.score}
                    changeScore={this.props.changeScore}
                />
            </div>
        );
    }
}

export default Player;
