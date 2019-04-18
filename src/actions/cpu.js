const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"

export const setRock = (rockPercent) => ({
  type: ROCK,
  rockPercent: rockPercent,
})

export const setPaper = (paperPercent) => ({
  type: PAPER,
  rockPercent: paperPercent,
})

export const setScissors = (scissorsPercent) => ({
  type: SCISSORS,
  rockPercent: scissorsPercent,
})


