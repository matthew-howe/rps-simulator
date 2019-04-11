import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../actions';

class Sidebar extends Component {

  
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
)(Sidebar);
