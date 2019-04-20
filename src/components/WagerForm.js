import React from 'react';
import { connect } from 'react-redux';
import { setWager } from '../actions'

class WagerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = parseInt(target.value);
    const name = target.name;
    this.props.setWager(value)    
  }

  render() {
    return (
      <form>
        <label>
          Wager $
          <br />
          <input
            defaultValue="50"
            name="wager"
            type="number"
            value={this.props.wager}
            onChange={this.handleInputChange}
          />
        </label>
       </form>
    );
  }
}

const mapStateToProps = state => ({
  wager: state.wager
})

const mapDispatchToProps = dispatch => ({
  setWager: (wager) => {
    dispatch(setWager(wager))
  }})
  
export default connect(mapStateToProps, mapDispatchToProps)(WagerForm);
