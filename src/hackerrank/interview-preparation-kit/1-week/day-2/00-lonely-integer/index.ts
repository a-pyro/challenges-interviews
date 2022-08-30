/**
 Given an array of integers, where all elements but one occur twice, find the unique element. 
 */

const lonelyInt = (nums: number[]): number => {
  const frequencies = nums.reduce(
    (ac, cv) => ({ ...ac, [cv]: ac[cv] ? ac[cv] + 1 : 1 }),
    {} as Record<string, number>
  )
  // const value = Object.entries(frequencies).find(
  //   ([_key, value]) => value === 1
  // )?.[0]
  let temp = 0
  for (const el in frequencies) {
    const frequency = frequencies[el]
    if (frequency === 1) {
      temp = Number(el)
    }
  }

  return temp
}
