import React, { Component } from "react";

import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      // { name: "Test", score: 999, id: 0 },
      { name: "Player 1", score: 10, id: 2 },
      { name: "Player 2", score: 50, id: 1 },
      { name: "Player 3", score: 60, id: 3 },
      { name: "Player 4", score: 1, id: 4 },
      { name: "Player 5", score: 25, id: 5 }
    ]
  };

  // player ID counter
  prevPlayerID = 4;

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };
  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
  };
  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: (this.prevPlayerID += 1)
          }
        ]
      };
    });
  };
  sortPlayers = () => {
    this.state.players.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };
  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);

    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();
    this.sortPlayers();

    return (
      <div className="App">
        <Header players={this.state.players} />

        <div className="players">
          {this.state.players.map((player, index) => (
            <Player
              key={player.id.toString()}
              index={index}
              id={player.id}
              name={player.name}
              score={player.score}
              isHighScore={highScore === player.score}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
            />
          ))}

          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </div>
    );
  }
}

export default App;
