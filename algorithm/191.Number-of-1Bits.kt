class Solution {
    fun hammingWeight(n: Int): Int {
        var number = n
        var count = 0
        while(number != 0) {
            number = number and (number - 1) // Brian Kernighan’s Algorithm
            count++
        }
        return count
    }
}
