class Solution {
    func duplicateZeros(_ arr: inout [Int]) {
        var queue: [Int] = []
        
        var idx = 0 
        while idx < arr.count - 1{
            let firstNumberToReplace = arr[idx]
            let secondNumberToReplace = arr[idx+1]
            if queue.count > 0 {
                let numberToPlace = queue.remove(at: 0)
                if numberToPlace == 0 {
                    arr[idx] = 0
                    arr[idx+1] = 0
                    queue.append(firstNumberToReplace)
                    queue.append(secondNumberToReplace)
                    idx += 1
                } else {
                    arr[idx] = numberToPlace
                    queue.append(firstNumberToReplace)
                }
            } else {
                if arr[idx] == 0 {
                   arr[idx+1] = 0 
                   queue.append(secondNumberToReplace)
                   idx += 1
                }
            }
            
            idx += 1
            
            if idx == arr.count-1 && queue.count > 0 { arr[arr.count-1] = queue[0] }
        }
    }
}