import React, { Component } from 'react';
import { connect } from 'react-redux';
import rock from '../images/rock.jpg'
import paper from '../images/paper.jpg'
import scissors from '../images/scissors.jpg'

class CpuHand extends Component {

  render() {
    let handImg
    switch (this.props.cpuHand) {
      case 'ROCK':
        handImg = <img src={rock} height={75} />
      case 'PAPER':
        handImg = <img src={paper} height={75} />
      case 'SCISSORS':
        handImg = <img src={scissors} height={75} />
    }
    return (
      <div className="player-hand">
        {handImg}
        {this.props.cpuHand}
        {handImg}
      </div>
    )
    
  }
}

const mapStateToProps = state => {
  return { 
    thrown: state.game.thrown,
    cpuHand: state.game.cpuHand
  }
}

const mapDispatchToProps = dispatch => {
  return {  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CpuHand);

// export const throwCpuHand = () => ({
//   type: CPU_THROW,
// })

