const initialState = {
  CpuHand: 'PAPER',
  PlayerHand: 'ROCK',
  Thrown: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'THROW':
      return Object.assign({}, state, { playerHand: action.thrown })
  default:
    return state
  }
}
