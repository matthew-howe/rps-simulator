import { standardDeviation } from '../utils/utils'

const THROW = 'THROW';
const SET_SCORES = 'SET_SCORES';
const SET_WAGER = 'SET_WAGER';
const SET_CHART = 'SET_CHART';
const AUTO_THROW = 'AUTO_THROW';
const RESET = 'RESET';

export const throwHand = weapon => ({
  type: THROW,
  weapon: weapon,
  thrown: true,
});

export const autoThrow = () => ({
  type: AUTO_THROW,
})

export const reset = () => ({
  type: RESET
})

export const setScores = (
  playerHand,
  cpuHand,
  playerScore,
  cpuScore,
  gamesPlayed,
  chartData,
  balance,
  wager,
  gameHistory,
  totalInvested,
  resultHistory,
  stdDevHistory
) => {
  let newGameHistory = gameHistory;
  newGameHistory.push({
    playerhand: playerHand,
    cpuhand: cpuHand,
    wager: wager,
    won: null,
    tie: null,
  });

  if (
    (playerHand === 'ROCK' && cpuHand === 'SCISSORS') ||
    (playerHand === 'PAPER' && cpuHand === 'ROCK') ||
    (playerHand === 'SCISSORS' && cpuHand === 'PAPER')
  ) {
    newGameHistory[newGameHistory.length - 1].won = true;
    newGameHistory[newGameHistory.length - 1].tie = false;
    let newGamesPlayed = gamesPlayed + 1
    resultHistory.push(wager);
    stdDevHistory.push(1);
    return {
      type: SET_SCORES,
      playerScore: playerScore + 1,
      cpuScore: cpuScore,
      thrown: false,
      gamesPlayed: newGamesPlayed,
      chartData: Object.assign({}, chartData, {
        [gamesPlayed + 1]: balance + wager,
      }),
      balance: balance + wager,
      gameHistory: newGameHistory,
      scoresSet: true,
      totalInvested: totalInvested + wager,
      roi: ((balance + wager) / (totalInvested + wager)) * 100,
      resultHistory: resultHistory,
      stdDevHistory: stdDevHistory,
      standardDev: standardDeviation(resultHistory),
      gameStandardDev: standardDeviation(stdDevHistory)
    };
  }
  if (
    (playerHand === 'PAPER' && cpuHand === 'SCISSORS') ||
    (playerHand === 'SCISSORS' && cpuHand === 'ROCK') ||
    (playerHand === 'ROCK' && cpuHand === 'PAPER')
  ) {
    let newGamesPlayed = gamesPlayed + 1
    newGameHistory[newGameHistory.length - 1].won = false;
    newGameHistory[newGameHistory.length - 1].tie = false;
    resultHistory.push(-wager)
    stdDevHistory.push(-1)
    return {
      type: SET_SCORES,
      playerScore: playerScore,
      cpuScore: cpuScore + 1,
      thrown: false,
      gamesPlayed: newGamesPlayed,
      chartData: Object.assign({}, chartData, {
        [gamesPlayed + 1]: balance - wager,
      }),
      balance: balance - wager,
      gameHistory: newGameHistory,
      scoresSet: true,
      totalInvested: totalInvested + wager,
      roi: ((balance - wager) / (totalInvested + wager)) * 100,
      resultHistory: resultHistory,
      stdDevHistory: stdDevHistory,
      standardDev: standardDeviation(resultHistory),
      gameStandardDev: standardDeviation(stdDevHistory)
    };
  }
  newGameHistory[newGameHistory.length - 1].won = false;
  newGameHistory[newGameHistory.length - 1].tie = true;
  resultHistory.push(0);
  stdDevHistory.push(0);
  return {
    type: SET_SCORES,
    playerScore: playerScore,
    cpuScore: cpuScore,
    thrown: false,
    gamesPlayed: gamesPlayed + 1,
    chartData: Object.assign({}, chartData, { [gamesPlayed + 1]: balance }),
    balance: balance,
    gameHistory: newGameHistory,
    scoresSet: true,
    totalInvested: totalInvested + wager,
    roi: (balance / (totalInvested + wager)) * 100,
    resultHistory: resultHistory,
    stdDevHistory: stdDevHistory,
    standardDev: standardDeviation(resultHistory),
    gameStandardDev: standardDeviation(stdDevHistory)
  };
};

export const setWager = wager => ({
  type: SET_WAGER,
  wager: wager,
});

export const setChart = (handType, gameHistory, chart, gamesPlayed) => {
  console.log('set chart running args', handType, gameHistory, chart, gamesPlayed );
  const oldGamesPlayed = gamesPlayed - 1;
  const newRockChart = gameHistory[gameHistory.length - 1].won
            ? Object.assign({}, chart.rockChart, {
                [gamesPlayed]:
                  chart.rockChart[oldGamesPlayed] +
                  gameHistory[gameHistory.length - 1].wager,
              })
            : Object.assign({}, chart.rockChart, {
                [gamesPlayed]:
                  chart.rockChart[oldGamesPlayed] -
                  gameHistory[gameHistory.length - 1].wager,
              })

  const newPaperChart = gameHistory[gameHistory.length - 1].won
            ? Object.assign({}, chart.paperChart, {
                [gamesPlayed]:
                  chart.paperChart[oldGamesPlayed] +
                  gameHistory[gameHistory.length - 1].wager,
              })
            : Object.assign({}, chart.paperChart, {
                [gamesPlayed]:
                  chart.paperChart[oldGamesPlayed] -
                  gameHistory[gameHistory.length - 1].wager,
              })

  const newScissorsChart = gameHistory[gameHistory.length - 1].won
            ? Object.assign({}, chart.scissorsChart, {
                [gamesPlayed]:
                  chart.scissorsChart[oldGamesPlayed] +
                  gameHistory[gameHistory.length - 1].wager,
              })
            : Object.assign({}, chart.scissorsChart, {
                [gamesPlayed]:
                  chart.scissorsChart[oldGamesPlayed] -
                  gameHistory[gameHistory.length - 1].wager,
              })
  console.log(newRockChart, newPaperChart, newScissorsChart)

  if (gameHistory[gameHistory.length - 1].tie) {
    return Object.assign(
      {},
      chart,
      {
        rockChart: Object.assign({}, chart.rockChart, {
          [gamesPlayed]: chart.rockChart[oldGamesPlayed],
        }),
        paperChart: Object.assign({}, chart.paperChart, {
          [gamesPlayed]: chart.paperChart[oldGamesPlayed],
        }),
        scissorsChart: Object.assign({}, chart.scissorsChart, {
          [gamesPlayed]: chart.scissorsChart[oldGamesPlayed],
        }),
      },
      { type: SET_CHART }
    );
  }
  switch (handType) {
    case 'ROCK':
      return Object.assign(
        {},
        chart,
        {
          rockChart: newRockChart,
          paperChart: Object.assign({}, chart.paperChart, {
            [gamesPlayed]: chart.paperChart[oldGamesPlayed],
          }),
          scissorsChart: Object.assign({}, chart.scissorsChart, {
            [gamesPlayed]: chart.scissorsChart[oldGamesPlayed],
          }),
        },
        { type: SET_CHART }
      );
    case 'PAPER':
      return Object.assign(
        {},
        chart,
        {
          rockChart: Object.assign({}, chart.rockChart, {
            [gamesPlayed]: chart.rockChart[oldGamesPlayed],
          }),
          paperChart: newPaperChart,
          scissorsChart: Object.assign({}, chart.scissorsChart, {
            [gamesPlayed]: chart.scissorsChart[oldGamesPlayed],
          }),
        },
        { type: SET_CHART }
      );

    case 'SCISSORS':
      return Object.assign(
        {},
        chart,
        {
          rockChart: Object.assign({}, chart.rockChart, {
            [gamesPlayed]: chart.rockChart[oldGamesPlayed],
          }),
          paperChart: Object.assign({}, chart.paperChart, {
            [gamesPlayed]: chart.paperChart[oldGamesPlayed],
          }),
          scissorsChart: newScissorsChart,
        },
        { type: SET_CHART }
      );
  }
};
