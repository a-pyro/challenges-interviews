const miniMaxSum = (nums: number[]): void => {
  const sorted = nums.sort((a, b) => a - b)
  const first = sorted.slice(0, -1).reduce((ac, cv) => ac + cv)
  const second = sorted.slice(1).reduce((ac, cv) => ac + cv)
  console.log(first, second)
}
