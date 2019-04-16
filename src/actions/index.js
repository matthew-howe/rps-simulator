const THROW = "THROW";
const SET_SCORES = "SET_SCORES"
const SET_WAGER = "SET_WAGER"

export const throwHand = (weapon) => ({    
  type: THROW,
  weapon: weapon,
  thrown: true
})

export const setScores = (playerHand, cpuHand, playerScore, cpuScore, gamesPlayed, chartData, balance, wager) => {
  if ( (playerHand === 'ROCK'     && cpuHand === 'SCISSORS') ||
       (playerHand === 'PAPER'    && cpuHand === 'ROCK') ||
    (playerHand === 'SCISSORS' && cpuHand === 'PAPER') ) {
    return {
      type: SET_SCORES,
      playerScore: playerScore + 1,
      cpuScore: cpuScore,
      thrown: false,
      gamesPlayed: gamesPlayed + 1,
      chartData: Object.assign({}, chartData, {[gamesPlayed + 1]: balance + wager}),
      balance: balance + wager,
    }
  }
    if ( (playerHand === 'PAPER' && cpuHand === 'SCISSORS') ||
      (playerHand === 'SCISSORS' && cpuHand === 'ROCK') ||
      (playerHand === 'ROCK' && cpuHand === 'PAPER') ) {
      return {
        type: SET_SCORES,
        playerScore: playerScore,
        cpuScore: cpuScore + 1,
        thrown: false,
        gamesPlayed: gamesPlayed + 1,
        chartData: Object.assign({}, chartData, {[gamesPlayed + 1]: balance - wager}),
        balance: balance - wager
      }
    }
    return {
      type: SET_SCORES,
      playerScore: playerScore,
      cpuScore: cpuScore,
      thrown: false,
      gamesPlayed: gamesPlayed + 1,
      chartData: Object.assign({}, chartData, {[gamesPlayed + 1]: balance}),
      balance: balance
    }
}

export const setWager = (wager) => ({
  type: SET_WAGER,
  wager: wager
})





