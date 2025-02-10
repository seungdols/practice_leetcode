class Solution {
    fun countBits(n: Int): IntArray {
        var ans = IntArray(n+1)

        var i = 0
        for (i in 0..n) {
            ans[i] = hammingWeight(i)
        }

        return ans

        // 가장 빠른 코드 해법
        // val result = IntArray(n + 1)
        // result[0] = 0
        // 이전 계산값(i shr 1) + 마지막 비트(i and 1)
        // for(i in 1..n) {
        //     result[i] = result[i shr 1] + (i and 1)
        // }
        // return result
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
