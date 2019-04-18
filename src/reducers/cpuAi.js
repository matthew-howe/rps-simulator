const initialState = {
  rock: 33,
  paper: 33,
  scissors: 33,
}

const cpu = (state = initialState, action) => {
  switch (action.type) {
    case "ROCK":
      return Object.assign({}, state, { rock: action.rockPercent })
    case "PAPER":
      return Object.assign({}, state, { paper: action.paperPercent })
    case "SCISSORS":
      return Object.assign({}, state, { scissors: action.scissorsPercent })
    default:
      return state
  }
}

export default cpu;
