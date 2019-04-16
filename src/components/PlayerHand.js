import React, { Component } from 'react'
import { connect } from 'react-redux';

class PlayerHand extends Component {
  render() {
    return (
      <div className="player-hand">
        {this.props.playerHand}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { playerHand: state.game.playerHand }
}

export default connect(mapStateToProps, null)(PlayerHand)


