// contine until the start and end positions are the same;
// have some sort of counter;
// if start and end are the same return the counter;
//  do recursion for four direction, return the minimum count;
// keep the trace which way it was previously pushed to avoid the infinite loop;
// have helper function that increments the positon until it hits a block and the ending;



const slideGame = (board, start, end, dir={ "up" : true, "down" : true, "left" : true, "right" : true}, visited={}) => {
    if (start[0] === end[0] && start[1] === end[1]) return 0; 
    
    // directions that don't lead to the end should return Infinity, in the begining default all directions everything to Infintity
    let right = Infinity;
    let left = Infinity;
    let up = Infinity;
    let down = Infinity;

    if (dir["left"]) {
        //  this conditions checks which way the previous step was, if it was pushed from the right then dir['left'] would be false so you don't check the left direction again, you can see how we put it to false on the line 36
        const leftPos = keepMoving(board, start, end, 'left');
        // leftPos show which cell it would take if we pushed it to the left. if it's the same as the start it means left is blocked, so no further step is needed
        if (leftPos[0] !== start[0] || leftPos[1] !== start[1]) {
            
            if (visited[`${leftPos[0]}${leftPos[1]}`]) return Infinity;
            // if leftPos was laready visited then we are in a loop and we should return infinity;
            visited[`${leftPos[0]}${leftPos[1]}`] = true
            left = 1 + slideGame(board, leftPos, end, dir={ "up" : true, "down" : true, "left" : true, "right" : false}, visited);
        };
    };

    if (dir["right"]) {
        const rightPos = keepMoving(board, start, end, 'right');
        
        if (rightPos[0] !== start[0] || rightPos[1] !== start[1]) {
            if (visited[`${rightPos[0]}${rightPos[1]}`]) return Infinity;
            visited[`${rightPos[0]}${rightPos[1]}`] = true;
            right = 1 + slideGame(board, rightPos, end, dir={ "up" : true, "down" : true, "left" : false, "right" : true}, visited);
        };
    };

    if (dir["up"]) {
        const upPos = keepMoving(board, start, end, 'up');
        
        if (upPos[0] !== start[0] || upPos[1] !== start[1]) {
            if (visited[`${upPos[0]}${upPos[1]}`]) return Infinity;
            visited[`${upPos[0]}${upPos[1]}`] = true;
            up = 1 + slideGame(board, upPos, end, dir={ "up" : true, "down" : false, "left" : true, "right" : true}, visited);
        }
    };

    if (dir["down"]) {
        const downPos = keepMoving(board, start, end, 'down');
        
        if (downPos[0] !== start[0] || downPos[1] !== start[1]) {
            if (visited[`${downPos[0]}${downPos[1]}`]) return Infinity;
            visited[`${downPos[0]}${downPos[1]}`] = true;
            down = 1 + slideGame(board, downPos, end, dir={ "up" : false, "down" : true, "left" : true, "right" : true}, visited);
        };
    };

    let res = Math.min(left, right, up, down);
    return res;

};

const keepMoving = (board, start, end, dir) => {
    start1 = [start[0], start[1]];
    
    while (board[start1[0], start1[1]] != null && board[start1[0]] && board[start1[0]][start1[1]] != 1) {
        
        if (start1[0] === end[0] && start1[1] === end[1]) return start1;
        if (start1[0] < 0 || start1[1] < 0) break;
        if (dir === "left") start1[1]--;
        if (dir === "right") start1[1]++;
        if (dir === "up") start1[0]--;
        if (dir === "down") start1[0]++;   
    }; 
   
    if (dir === "left")  start1[1]++;
    if (dir === "right") start1[1]--;
    if (dir === "up")    start1[0]++;
    if (dir === "down") start1[0]--;

    return start1;

};

// && board[start[0], start[1]] !== null && board[start[0], start[1]] !== 1