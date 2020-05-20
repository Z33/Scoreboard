import React from "react";
import propTypes from "prop-types";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <Stats players={props.players} />
            <Stopwatch />
        </header>
    );
};

Header.propTypes = {
    title: propTypes.string,
    players: propTypes.arrayOf(propTypes.object),
};

Header.defaultProps = {
    title: "Scoreboard",
};

export default Header;
