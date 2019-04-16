import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PlayerHand from './components/PlayerHand';
import CpuHand from './components/CpuHand';
import Throw from './components/Throw';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="game">
          
          <br />
          <CpuHand />
          <br />
          <Chart />
          <br />
          <PlayerHand />
          <br />
          <Throw />
        </div>
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
