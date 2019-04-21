import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  throwHand,
  setScores,
  setWager,
  autoThrow,
  setChart,
  reset
} from '../actions';

class Throw extends Component {
  constructor(props) {
    super(props);
    this.startSim.bind(this);
    this.stopSim.bind(this);
  }

  componentDidUpdate() {
    if (this.props.thrown === true) {
      this.props.setScores(
        this.props.playerHand,
        this.props.cpuHand,
        this.props.playerScore,
        this.props.cpuScore,
        this.props.gamesPlayed,
        this.props.chartData,
        this.props.balance,
        this.props.wager,
        this.props.gameHistory,
        this.props.totalInvested,
        this.props.resultHistory,
        this.props.stdDevHistory
      );
    }
  }

  startSim() {
    for (let i = 0; i < 250; i++) {
      let sim = function(i) {
        return function() {
          document
            .getElementById(['1', '2', '3'][Math.floor(Math.random() * 3)])
            .click();
        };
      };
      setTimeout(sim(i), 50 * i);
    }
  }

  stopSim() {
    for (let i = 0; i < 250; i++) {
      window.clearTimeout(i);
    }
  }

  render() {
    return (
      <div>
        <button id="1" onClick={() => this.props.throwHand('ROCK')}>
          ROCK
        </button>
        <button id="2" onClick={() => this.props.throwHand('PAPER')}>
          PAPER
        </button>
        <button id="3" onClick={() => this.props.throwHand('SCISSORS')}>
          SCISSORS
        </button>
        <br />
        <br />
        <button onClick={() => this.startSim()}>START SIMULATION</button>
        <button onClick={() => this.stopSim()}>STOP SIMULATION</button>
        <button onClick={() => this.props.reset()}>RESET</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerHand: state.game.playerHand,
  playerScore: state.game.playerScore,
  cpuHand: state.game.cpuHand,
  cpuScore: state.game.cpuScore,
  thrown: state.game.thrown,
  gamesPlayed: state.game.gamesPlayed,
  chartData: state.game.chartData,
  wager: state.game.wager,
  balance: state.game.balance,
  gameHistory: state.game.gameHistory,
  chart: state.game.chart,
  totalInvested: state.game.totalInvested,
  resultHistory: state.game.resultHistory,
  stdDevHistory: state.game.stdDevHistory
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    throwHand: weapon => {
      dispatch(throwHand(weapon));
    },
    setScores: (
      playerHand,
      cpuHand,
      playerScore,
      cpuScore,
      gamesPlayed,
      chartData,
      balance,
      wager,
      gameHistory,
      totalInvested,
      resultHistory,
      stdDevHistory
    ) => {
      dispatch(
        setScores(
          playerHand,
          cpuHand,
          playerScore,
          cpuScore,
          gamesPlayed,
          chartData,
          balance,
          wager,
          gameHistory,
          totalInvested,
          resultHistory,
          stdDevHistory
        )
      );
    },
    setWager: wager => {
      dispatch(setWager(wager));
    },
    autoThrow: () => {
      dispatch(autoThrow());
    },
    setChart: (handType, gameHistory, chart, gamesPlayed) => {
      dispatch(setChart(handType, gameHistory, chart, gamesPlayed));
    },
    reset: () => dispatch(reset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Throw);
