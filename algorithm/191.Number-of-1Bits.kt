class Solution {
    fun hammingWeight(n: Int): Int {
        var number = n
        var count = 0
        while(number != 0) {
            count += number and 1
            number = number ushr 1
        }
        return count
    }
}
