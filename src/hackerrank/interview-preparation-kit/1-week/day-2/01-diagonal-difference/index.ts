const getAbsDiff = (n1: number, n2: number) => Math.abs(n1 - n2)
const getDiagonalSum = (arr: number[][], diagDirection: 'left' | 'right') => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i][diagDirection === 'left' ? i : arr.length - i - 1]
    console.log(element)
    sum += element
  }
  return sum
}

const diagonalDifference = (arr: number[][]): number => {
  const leftDiag = getDiagonalSum(arr, 'left')
  const rightDiag = getDiagonalSum(arr, 'right')
  return getAbsDiff(leftDiag, rightDiag)
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
)
;[
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]
;[
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]
;[
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
]
;[
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
]
