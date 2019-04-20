import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throwHand, setScores, setWager, autoThrow, setChart } from '../actions';


class Throw extends Component {

  componentDidUpdate () {
    console.log('throw props', this.props)
    if (this.props.thrown === true) {
      this.props.setScores(this.props.playerHand, this.props.cpuHand,
        this.props.playerScore, this.props.cpuScore,
      this.props.gamesPlayed, this.props.chartData, this.props.balance, this.props.wager, this.props.gameHistory)
    }
  }

  render () {
    return (
      <div>
        <button id="1" onClick={() => this.props.throwHand('ROCK')}>ROCK</button>
        <button id="2" onClick={() => this.props.throwHand('PAPER')}>PAPER</button>
        <button id="3" onClick={() => this.props.throwHand('SCISSORS')}>SCISSORS</button>
        <br />
        <br />
        <button onClick={() => {
          for (let i = 0; i < 500; i++) {
            document.getElementById(["1","2","3"][Math.floor(Math.random() * 3)]).click();
          }
        }
        }>
          SIMULATE
        </button>
      </div>
    )
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
  chart: state.game.chart
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    throwHand: (weapon) => {
      dispatch(throwHand(weapon))    
    },
    setScores: (playerHand, cpuHand, playerScore, cpuScore, gamesPlayed, chartData, balance, wager, gameHistory) => {
      dispatch(setScores(playerHand, cpuHand, playerScore, cpuScore, gamesPlayed, chartData, balance, wager, gameHistory))
    },
    setWager: (wager) => {
      dispatch(setWager(wager))
    },
    autoThrow: () => {
      dispatch(autoThrow())
    },
    setChart: (handType, gameHistory, chart, gamesPlayed) => {
      dispatch(setChart(handType, gameHistory, chart, gamesPlayed))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Throw)
