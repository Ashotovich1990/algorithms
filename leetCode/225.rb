class MyStack

    =begin
        Initialize your data structure here.
    =end
        def initialize()
            @queue = []
            @size = 0
        end
    
    
    =begin
        Push element x onto stack.
        :type x: Integer
        :rtype: Void
    =end
        def push(x)
            @queue.push(x)
            i = 0 
            while i < @size
                @queue.push(@queue.shift)
                i += 1
            end
            
            @size += 1
            return
        end
    
    
    =begin
        Removes the element on top of the stack and returns that element.
        :rtype: Integer
    =end
        def pop()
            @size -= 1 
            @queue.shift
        end
    
    
    =begin
        Get the top element.
        :rtype: Integer
    =end
        def top()
            @queue[0]
        end
    
    
    =begin
        Returns whether the stack is empty.
        :rtype: Boolean
    =end
        def empty()
            @size == 0
        end
    
    
    end