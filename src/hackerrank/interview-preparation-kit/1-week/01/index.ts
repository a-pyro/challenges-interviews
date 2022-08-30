const printRatio = (nums: number[]) => {
  const divisor = nums.length
  type MapKey = 'pos' | 'neg' | 'zero'
  const map: Record<MapKey, number> = {
    pos: 0,
    neg: 0,
    zero: 0,
  }
  nums.forEach((num) => {
    switch (true) {
      case num > 0:
        map['pos']++
        break
      case num < 0:
        map['neg']++
        break
      default:
        map['zero']++
    }
  })
  const printFormatted = (n: number, divisor: number) =>
    console.log((n / divisor).toFixed(6))
  const { pos, neg, zero } = map
  printFormatted(pos, divisor)
  printFormatted(neg, divisor)
  printFormatted(zero, divisor)
}
