class Node {
    
    var val: Int
    var prevMin: Int?
    
    init(value: Int) {
       self.val = value 
    }
}


class MinStack {
    
    var stack:[Node]
    var min: Int?
    /** initialize your data structure here. */
    init() {
        self.stack = []
    }
    
    func push(_ x: Int) {
        var node = Node(value: x)
        if let min = self.min {
            if node.val <= min {
                self.min = node.val
                node.prevMin = min
            }
        } else {
            self.min = node.val
        }
        self.stack.append(node)
    }
    
    func pop() {
        if var last = self.stack.last {
            last = stack.removeLast()
            if last.val == min! {
                self.min = last.prevMin
            }
        }
    }
    
    func top() -> Int {
        return self.stack.last!.val
    }
    
    func getMin() -> Int {
        return self.min!
    }
}