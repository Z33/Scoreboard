import React from "react";
import propTypes from "prop-types";
import Counter from "./Counter";

const AddPlayerForm = ({ addPlayer }) => {
    let playerInput = React.createRef();
    let handleSubmit = (e) => {
        e.preventDefault();

        const val = playerInput.current.value;

        if (val.length > 0) {
            addPlayer(val);
            e.currentTarget.reset();
        }
    };

    return (
        <form className="add-player" onSubmit={handleSubmit}>
            <input type="text" ref={playerInput} placeholder="Player Name" />
            <input type="submit" value="Add Player" />
        </form>
    );
};

Counter.propTypes = {
    index: propTypes.number,
    score: propTypes.number,
    changeScore: propTypes.func,
};

export default AddPlayerForm;
