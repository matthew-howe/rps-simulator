const initialState = {
  cpuHand: 'PAPER',
  playerHand: 'ROCK',
  thrown: false,
  playerScore: 0,
  cpuScore: 0,
  chartData: { '0': 0, '1': 0 },
  gamesPlayed: 0,
  balance: 0,
  wager: 50,
  roi: 0,
  totalInvested: 0,
  chart: {
    rockChart: {'0': 0},
    paperChart: {'0': 0},
    scissorsChart: {'0': 0},
  },
  standardDev: 0,
  gameStandardDev: 0,
  resultHistory: [0],
  stdDevHistory: [0],
  expectedValue: 0,
  gameHistory: [],
  scoresSet: false,
};

const game = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'THROW':
      return Object.assign({}, state, {
        playerHand: action.weapon,
        cpuHand: ['ROCK', 'PAPER', 'SCISSORS'][Math.floor(Math.random() * 3)],
        thrown: true,
      });
    case 'AUTO_THROW':
      return Object.assign({}, state, {
        playerHand: ['ROCK', 'PAPER', 'SCISSORS'][Math.floor(Math.random() * 3)],
        cpuHand: ['ROCK', 'PAPER', 'SCISSORS'][Math.floor(Math.random() * 3)],
        thrown: true
      })
    case 'RESET':
      return initialState
    case 'SET_SCORES':
      return Object.assign({}, state, {
        playerScore: action.playerScore,
        cpuScore: action.cpuScore,
        thrown: action.thrown,
        gamesPlayed: action.gameHistory.length,
        chartData: action.chartData,
        balance: action.balance,
        gameHistory: action.gameHistory,
        scoresSet: action.scoresSet,
        totalInvested: action.totalInvested,
        roi: action.roi,
        resultHistory: action.resultHistory,
        standardDev: action.standardDev,
        gameStandardDev: action.gameStandardDev
      });
    case 'SET_WAGER':
      return Object.assign({}, state, {
        wager: action.wager,
      });
    case 'SET_CHART':
      return Object.assign(
        {},
        state,
        {
          chart: {
            rockChart: action.rockChart,
            paperChart: action.paperChart,
            scissorsChart: action.scissorsChart,
          },
        },
        { scoresSet: false }
      );
    default:
      return state;
  }
};

export default game;
