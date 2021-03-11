/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  const sortArr = arr.sort((a, b) => a - b)

  let diff = arr[1] - arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != diff) {
      return false
    }
  }
  return true
}
