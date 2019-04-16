import React, { Component } from 'react';
import { connect } from 'react-redux';

class CpuHand extends Component {

  render() {
    return (
      <div className="player-hand">
        {this.props.cpuHand}
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

