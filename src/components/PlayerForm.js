import React from 'react';
import { connect } from 'react-redux';
import { setRock, setPaper, setScissors } from '../actions/player'

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rock: 33,
      paper: 33,
      scissors: 33,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    switch(name){
      case 'rock':
        this.props.setRock(value)
        break;
      case 'paper':
        this.props.setPaper(value)
        break;
      case 'scissors':
        this.props.setScissors(value)
        break;
      default:
        console.log('player input error')
    }
    
  }

  render() {
    return (
      <form>
        <label>
          Rock %
          <br />
          <input
            name="rock"
            type="number"
            value={this.props.rock}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Paper %
          <br />
          <input
            name="paper"
            type="number"
            value={this.props.paper}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Scissors %
          <br />
          <input
            name="scissors"
            type="number"
            value={this.props.scissors}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  rock: state.player.rock,
  paper: state.player.paper,
  scissors: state.player.scissors,
  last: state.player.last,
  balancedPercents: state.player.balancedPercents
})

const mapDispatchToProps = dispatch => ({
  setRock: (rockPercent) => {
    dispatch(setRock(rockPercent))
  },
  setPaper: (paperPercent) => {
    dispatch(setPaper(paperPercent)) 
  },
  setScissors: (scissorsPercent) => {
    dispatch(setScissors(scissorsPercent))
  }
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);
