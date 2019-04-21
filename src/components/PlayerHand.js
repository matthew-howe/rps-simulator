import React, { Component } from 'react'
import { connect } from 'react-redux';
import rock from '../images/rock.jpg'
import paper from '../images/paper.jpg'
import scissors from '../images/scissors.jpg'

class PlayerHand extends Component {
  render() {
    let handImg
    switch (this.props.playerHand) {
      case 'ROCK':
        handImg = <img src={rock} height={75}/>
      case 'PAPER':
        handImg = <img src={paper} height={75}/>
      case 'SCISSORS':
        handImg = <img src={scissors} height={75}/>
    }
    return (
      <div className="player-hand">
        {handImg}
        {this.props.playerHand}
        {handImg}
      </div>
    )
    }
  
}

const mapStateToProps = state => {
  return { playerHand: state.game.playerHand }
}

export default connect(mapStateToProps, null)(PlayerHand)


