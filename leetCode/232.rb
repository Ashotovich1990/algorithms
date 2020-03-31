class MyQueue

    =begin
        Initialize your data structure here.
    =end
        def initialize()
            @queue_in = []
            @queue_out = []
            @size = 0
        end
    
    
    =begin
        Push element x to the back of queue.
        :type x: Integer
        :rtype: Void
    =end
        def push(x)
            @size += 1
            @queue_in.push(x)
        end
    
    
    =begin
        Removes the element from in front of queue and returns that element.
        :rtype: Integer
    =end
        def pop()
            if @queue_out.size == 0 
                if @queue_in.size == 0 
                    return 
                end
                
                while @queue_in.size > 0 
                    @queue_out.push(@queue_in.pop)
                end
            end
            
            @size -= 1
            return @queue_out.pop
        end
    
    
    =begin
        Get the front element.
        :rtype: Integer
    =end
        def peek()
            if @queue_out.size == 0 
                if @queue_in.size == 0 
                    return 
                end
                
                while @queue_in.size > 0 
                    @queue_out.push(@queue_in.pop)
                end
            end
    
            return @queue_out.last
        end
    
    
    =begin
        Returns whether the queue is empty.
        :rtype: Boolean
    =end
        def empty()
            @size == 0
        end
    
    
    end
    