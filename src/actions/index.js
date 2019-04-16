const THROW = "THROW";
const SET_SCORES = "SET_SCORES"

export const throwHand = (weapon) => ({    
  type: THROW,
  weapon: weapon,
  thrown: true
})

export const setScores = (playerHand, cpuHand, playerScore, cpuScore, gamesPlayed, chartData) => {
  let date = Date.now() % 12
  if ( (playerHand === 'ROCK'     && cpuHand === 'SCISSORS') ||
       (playerHand === 'PAPER'    && cpuHand === 'ROCK') ||
    (playerHand === 'SCISSORS' && cpuHand === 'PAPER') ) {
    return {
      type: SET_SCORES,
      playerScore: playerScore + 1,
      cpuScore: cpuScore,
      thrown: false,
      gamesPlayed: gamesPlayed + 1,
      chartData: Object.assign({}, chartData, {[gamesPlayed + 1]: playerScore - cpuScore})
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
        chartData: Object.assign({}, chartData, {[gamesPlayed + 1]: playerScore - cpuScore})
      }
    }
    return {
      type: SET_SCORES,
      playerScore: playerScore,
      cpuScore: cpuScore,
      thrown: false,
      gamesPlayed: gamesPlayed + 1,
      chartData: Object.assign({}, chartData, {[gamesPlayed + 1]: playerScore - cpuScore})
    }
}




