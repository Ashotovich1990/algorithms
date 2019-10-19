// brute force sorting 
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

// using in place sort

class KthLargest {
    
    let k: Int 
    var nums: [Int] = []
    
    init(_ k: Int, _ nums: [Int]) {
        self.k = k 
        self.nums = nums 
        self.nums.sort()
        if k < self.nums.count {
            self.nums = Array(self.nums[(self.nums.count - self.k)...]) 
        }
    }
    
    func add(_ val: Int) -> Int {
       self.putInSortedPlace(value: val)
       return self.nums[0]
    }
    
    func putInSortedPlace(value: Int) {
        self.nums.insert(value, at: 0)
        
        for idx in 0..<(self.nums.count-1) {
            if (self.nums[idx] <= self.nums[idx+1]) {
                break 
            } else {
                var temp = self.nums[idx]
                self.nums[idx] = self.nums[idx+1]
                self.nums[idx+1] = temp
            }
        }
        
        if self.k < self.nums.count { self.nums.remove(at: 0) }
    }
    
  
}

// optimzed with b-search insertion 

class KthLargest {
    
    let k: Int 
    var nums: [Int] = []
    
    init(_ k: Int, _ nums: [Int]) {
        self.k = k 
        self.nums = nums 
        self.nums.sort()
        if k < self.nums.count {
            self.nums = Array(self.nums[(self.nums.count - self.k)...]) 
        }
    }
    
    func add(_ val: Int) -> Int {
       self.putInSortedPlace(val: val)
       return self.nums[0]
    }
    
    func putInSortedPlace(val: Int) {
        
        var left = 0 
        var right = self.nums.count - 1 
        var toInsert: Int?
        
        while left <= right {
            var mid = (left + right)/2 
            
            if self.nums[mid] == val {
                toInsert = mid 
                break
            } else if self.nums[mid] < val { 
                left = mid + 1 
                toInsert = left
            } else {
                right = mid - 1
            }
        }
        
        var idx = toInsert == nil ? left : toInsert!
        
        self.nums.insert(val, at: idx)
        
        if self.k < self.nums.count { self.nums.remove(at: 0) }
        
    }
    
  
}
