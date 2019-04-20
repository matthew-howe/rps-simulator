const initialState = {
  cpuHand: 'PAPER',
  playerHand: 'ROCK',
  thrown: false,
  playerScore: 0,
  cpuScore: 0,
  chartData: {"1": 5, "2": 6},
  gamesPlayed: 0,
  balance: 0,
  wager: 50,
  roi: 0,
  ROCK: 0,
  PAPER: 0, 
  SCISSORS: 0,
  standardDev: 0,
  expectedValue: 0,
  gameHistory: []
}

const game = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'THROW':
      return Object.assign({}, state, { 
        playerHand: action.weapon,
        cpuHand: ['ROCK', 'PAPER', 'SCISSORS'][Math.floor(Math.random() * 3)],
        thrown: true,
      })
    case 'SET_SCORES':
      return Object.assign({}, state, {
        playerScore: action.playerScore,
        cpuScore: action.cpuScore,
        thrown: action.thrown,
        gamesPlayed: action.gamesPlayed,
        chartData: action.chartData,
        balance: action.balance,
      })
    case 'SET_WAGER':
      return Object.assign({}, state, {
        wager: action.wager
      })
    default:
      return state
  }
}

export default game
