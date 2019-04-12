import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Throw extends Component {

  render () {
    return (
      <div>
        <button>ROCK</button>
        <button>PAPER</button>
        <button>SCISSORS</button>
      </div>
    )
  }
}
