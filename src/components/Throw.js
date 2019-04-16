import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throwHand, setScores, setWager } from '../actions';


class Throw extends Component {

  componentDidUpdate () {
    console.log('throw props', this.props)
    if (this.props.thrown === true) {
      this.props.setScores(this.props.playerHand, this.props.cpuHand,
        this.props.playerScore, this.props.cpuScore,
      this.props.gamesPlayed, this.props.chartData, this.props.balance, this.props.wager)
    }
  }

  render () {
    return (
      <div>
        <button onClick={() => this.props.throwHand('ROCK')}>ROCK</button>
        <button onClick={() => this.props.throwHand('PAPER')}>PAPER</button>
        <button onClick={() => this.props.throwHand('SCISSORS')}>SCISSORS</button>
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
  balance: state.game.balance
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    throwHand: (weapon) => {
      dispatch(throwHand(weapon))    
    },
    setScores: (playerHand, cpuHand, playerScore, cpuScore, gamesPlayed, chartData, balance, wager) => {
      dispatch(setScores(playerHand, cpuHand, playerScore, cpuScore, gamesPlayed, chartData, balance, wager))
    },
    setWager: (wager) => {
      dispatch(setWager(wager))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Throw)
