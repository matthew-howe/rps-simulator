import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        Wager: ${this.props.wager}
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
