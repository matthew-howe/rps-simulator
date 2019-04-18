const initialState = {
  rock: 33,
  paper: 33,
  scissors: 33,
  last: null,
  balancedPercents: true
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case "ROCK":
      return Object.assign({}, state, { rock: action.rockPercent, balancedPercents: 'rock' })
    case "PAPER":
      return Object.assign({}, state, { paper: action.paperPercent, balancedPercents: 'paper' })
    case "SCISSORS":
      return Object.assign({}, state, { scissors: action.scissorsPercent, balancedPercents: 'scissors' })
    default:
      return state
  }
}

export default player;
