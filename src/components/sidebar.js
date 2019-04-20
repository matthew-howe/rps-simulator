import React, { Component } from 'react';
import { connect } from 'react-redux';
import CpuForm from './CpuForm';
import PlayerForm from './PlayerForm';
import WagerForm from './WagerForm';
import { setChart } from '../actions';

class Sidebar extends Component {
  componentDidUpdate() {
    console.log('sidebar props', this.props)
    console.log('setchart scoreset', this.props.scoreSet)
    if (this.props.scoresSet) {
      console.log(this.props.scoreSet, 'should be true')
      this.props.setChart(
        this.props.gameHistory[this.props.gameHistory.length - 1].playerhand,
        this.props.gameHistory,
        this.props.chart,
        this.props.gamesPlayed
      );
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="score">
          <b>SCORE</b>
          <br />
          Player: {this.props.playerScore}
          <br />
          CPU: {this.props.cpuScore}
        </div>
        <div className="balance">Balance: ${this.props.balance}</div>
        <div className="wager">
          <WagerForm />
        </div>
        <br />
        <div className={'cpu-strategy'}>
          <b>CPU AI</b>
          <CpuForm />
        </div>
        <div>
          <b>Player AI</b>
          <PlayerForm />
        </div>
        <div>
          <b>Statistics</b>
          <br />
          Expected Value: $0
        </div>
        <div>ROI: 0%</div>
        <div>Standard Deviation: 0</div>
        <div>Rock Winnings: $0</div>
        <div>Paper Winnings: $0</div>
        <div>Scissors Winnings: $0</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerScore: state.game.playerScore,
  cpuScore: state.game.cpuScore,
  balance: state.game.balance,
  wager: state.game.wager,
  gameHistory: state.game.gameHistory,
  chart: state.game.chart,
  gamesPlayed: state.game.gamesPlayed,
  scoresSet: state.game.scoresSet
});

const mapDispatchToProps = dispatch => ({
  setChart: (handType, gameHistory, chart, gamesPlayed) => {
    dispatch(setChart(handType, gameHistory, chart, gamesPlayed));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
