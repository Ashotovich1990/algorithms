class Solution {
    func champagneTower(_ poured: Int, _ query_row: Int, _ query_glass: Int) -> Double {
        var result: [[Double]] = Array(repeating: Array(repeating: 0.0, count:101), count: 101)
        result[0][0] = Double(poured)
        
       for row in 0...query_row {
           for cup in 0...row {
               var flow = (result[row][cup] - 1.0)/2.0
               if flow > 0 {
                   result[row+1][cup] += flow 
                   result[row+1][cup+1] += flow
               }
           }
       }
        
        return  result[query_row][query_glass] > 1.0 ? 1.0 : result[query_row][query_glass] 
    }
}