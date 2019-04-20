import React, { Component } from 'react';
import { connect } from 'react-redux';
import CpuForm from './CpuForm';
import PlayerForm from './PlayerForm';
import WagerForm from './WagerForm';

class Sidebar extends Component {
  
  render () {
    return (
      <div className="sidebar">
      <div className="score">
        <b>SCORE</b><br />
        Player: {this.props.playerScore}<br />
        CPU: {this.props.cpuScore}
      </div>
      <div className="balance">
        Balance: ${this.props.balance}
      </div>
      <div className="wager">
        <WagerForm />
      </div>
      <br />
      <div className={"cpu-strategy"}>
        <b>CPU AI</b>
        <CpuForm />
      </div>
      <div>
        <b>Player AI</b>
        <PlayerForm />
      </div>
      <div>
        <b>Statistics</b><br />
        Expected Value: $0
      </div>
      <div>
        ROI: 0%
      </div>
      <div>
        Standard Deviation: 0
      </div>
      <div>
        Rock Winnings: $0
      </div>
      <div>
        Paper Winnings: $0
      </div>
      <div>
        Scissors Winnings: $0
      </div>
    </div>

    )
  }
}

const mapStateToProps = state => ({
  playerScore: state.game.playerScore,
  cpuScore: state.game.cpuScore,
  balance: state.game.balance,
  wager: state.game.wager
})

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
