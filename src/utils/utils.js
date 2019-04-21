export const standardDeviation = (arr) => {
  const sum = arr.reduce((sum, val) => { return sum + val }, 0)
  const avg = sum / arr.length
  const squareDiffs = arr.map(val => (val - avg) * (val - avg))
  const avgSquareDiff = (squareDiffs.reduce((sum, val) => {
    return sum + val
  }, 0) / squareDiffs.length)
  const stdDev = Math.sqrt(avgSquareDiff)
  return stdDev;
}
