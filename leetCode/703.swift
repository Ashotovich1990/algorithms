
class KthLargest {
    
    let k: Int 
    var nums: [Int] = []
    
    init(_ k: Int, _ nums: [Int]) {
        self.k = k 
        self.nums = nums 
        
        self.nums.sort()
        var copy: [Int] = []
        
        var endIdx = nums.count - 1 
        var i = 0
        
        while i < k && endIdx - i >= 0 {
            copy.insert(self.nums[endIdx - i], at: 0)
            i += 1
        }
        
        self.nums = copy 
        
    }
    
    func add(_ val: Int) -> Int {
        self.nums.append(val)
        
        self.nums.sort()
        var copy: [Int] = []
        
        var endIdx = self.nums.count - 1 
        var i = 0
        
        while i < k && endIdx - i >= 0 {
            copy.insert(self.nums[endIdx - i], at: 0)
            i += 1
        }
        
        self.nums = copy 

        return self.nums[0]
    }
}