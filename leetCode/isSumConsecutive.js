function isSumOfConsecutive(n) {
    let i = 1 
    let j = 2 
    let sum = 3
    while (j < n) {
        if (sum === n) return true
        if (sum < n) {
            j++ 
            sum += j 
        } else {
            i++
            j = i + 1
            sum = i + j
        }
    }
    
    return false
}