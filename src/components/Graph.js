import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions';

class Graph extends Component {

  
  render () {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph);
