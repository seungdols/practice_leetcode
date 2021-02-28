/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const length1 = word1.length
  const length2 = word2.length
  const result = []
  for (let i = 0; i < length1 + length2; i++) {
    const w1 = word1[i]
    const w2 = word2[i]

    if (w1) {
      result.push(w1)
    }
    if (w2) {
      result.push(w2)
    }
  }

  return result.join("")
}
