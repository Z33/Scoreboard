import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    elapsedTime: 0,
    previousTime: 0,
    isRunning: false
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.updateTimer(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateTimer = () => {
    if (this.state.isRunning) {
      const now = Date.now();

      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime),
        previousTime: now
      }));
    }
  };

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({
      elapsedTime: 0
    });
  };

  render() {
    let secs = Math.floor(this.state.elapsedTime / 1000);
    let mins = Math.floor((secs / 60) % 60)
      .toString()
      .padStart(2, "0");
    let hour = Math.floor((secs / 3600) % 3600)
      .toString()
      .padStart(2, "0");
    secs = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");

    let time = hour + ":" + mins + ":" + secs;
    let timeArray = time.split("");
    let foundLastZero = false;

    timeArray.map((obj, index) => {
      if (foundLastZero !== true) {
        if (obj === "0") {
          timeArray[index] = "<span>0</span>";
        } else if (obj !== ":") {
          foundLastZero = true;
        }
      }
      return false;
    });

    let timeFormatted = timeArray.join("");

    return (
      <div className="stopwatch">
        <div className="timer">
          <p
            dangerouslySetInnerHTML={{
              __html: timeFormatted
            }}
          />
        </div>
        <button className="start" onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Pause" : "Start"}
        </button>
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Stopwatch;
