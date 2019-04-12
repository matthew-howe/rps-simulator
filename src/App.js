import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PlayerHand from './components/PlayerHand';
import { CpuHand } from './components/CpuHand';
import Throw from './components/Throw';

class App extends Component {
  render() {
    return (
      <div className="game">
        <CpuHand />
        <PlayerHand />
        <Throw />
      </div>
          );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
