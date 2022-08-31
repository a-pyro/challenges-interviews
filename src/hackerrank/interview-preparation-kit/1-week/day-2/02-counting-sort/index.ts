const countingSort = (arr: number[]): number[] =>
  arr.reduce((ac, cv) => {
    ac[cv]++
    return ac
  }, new Array(100).fill(0))
