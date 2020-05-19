import React from "react";
import PropTypes from "prop-types";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <Stats players={props.players} />
      <Stopwatch />
    </header>
  );
};

Header.PropTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: "Scoreboard"
};

export default Header;
