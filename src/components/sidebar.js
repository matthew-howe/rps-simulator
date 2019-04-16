import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  
  render () {
    return (
      <div>
        Player: {this.props.playerScore}, CPU: {this.props.cpuScore}
      </div>

    )
  }
}

const mapStateToProps = state => ({
  playerScore: state.game.playerScore,
  cpuScore: state.game.cpuScore
})

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
