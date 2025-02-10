class Solution {
    fun countBits(n: Int): IntArray {
        var ans = IntArray(n+1)

        var i = 0
        for (i in 0..n) {
            ans[i] = hammingWeight(i)
        }

        return ans
    }

    fun hammingWeight(n: Int): Int {
        var number = n
        var count = 0
        while(number != 0) {
            number = number and (number - 1)
            count++
        }
        return count
    }
}
