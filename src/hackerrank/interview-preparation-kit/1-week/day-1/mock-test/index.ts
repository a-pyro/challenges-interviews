function findMedian(arr: number[]): number {
  const isOdd = arr.length % 2 !== 0
  const sorted = arr.sort((a, b) => a - b)
  const middle = Math.floor(arr.length / 2)
  return isOdd ? sorted[middle] : (sorted[middle] + sorted[middle - 1]) / 2
}
