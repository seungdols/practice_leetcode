class Solution {
    fun mostWordsFound(sentences: Array<String>): Int {
        val splited = sentences.map{ it.split(' ').size }
        var max = 0 
        for(value in splited) {
            if (value > max) max = value
        }
        return max
    }
}
