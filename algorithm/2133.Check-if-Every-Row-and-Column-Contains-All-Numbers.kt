class Solution {
    fun checkValid(matrix: Array<IntArray>): Boolean {
        val n = matrix.size - 1
        for (i in 0..n) {
	        val row = HashSet<Int>()
            val col = HashSet<Int>()
            for (j in 0..n) {
  		      row.add(matrix[i][j])
              col.add(matrix[j][i])
            }
            if (row.size != matrix[i].size) return false
            if (col.size != matrix[i].size) return false
        }
   
        return true
    }
}
