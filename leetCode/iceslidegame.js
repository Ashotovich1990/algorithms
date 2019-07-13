// contine untill the start and end positions are the same;
// have some sort of counter;
// if start and end are the same return the counter;
//  do recursion for four direction, return the minimum count;
// keep the trace which way it was previously pushed to avoid the infinite loop;
// have helper function that increments the positon until it hits a block and the ending;



const slideGame = (board, start, end, dir={ "up" : true, "down" : true, "left" : true, "right" : true}, memo={}) => {
    if (start[0] === end[0] && start[1] === end[1]) return 0; 
    let right = Infinity;
    let left = Infinity;
    let up = Infinity;
    let down = Infinity;

    if (dir["left"]) {
        const leftPos = keepMoving(board, start, end, 'left');
        if (leftPos[0] !== start[0] || leftPos[1] !== start[1]) {
            left = 1 + slideGame(board, leftPos, end, dir={ "up" : true, "down" : true, "left" : true, "right" : false});
        };
    };

    if (dir["right"]) {
        const rightPos = keepMoving(board, start, end, 'right');
        console.log(rightPos);
        console.log(start);
        if (rightPos[0] !== start[0] || rightPos[1] !== start[1]) {
            console.log("to right")
            right = 1 + slideGame(board, rightPos, end, dir={ "up" : true, "down" : true, "left" : false, "right" : true});
        };
    };

    if (dir["up"]) {
        const upPos = keepMoving(board, start, end, 'up');
        if (upPos[0] !== start[0] || upPos[1] !== start[1]) {
            up = 1 + slideGame(board, upPos, end, dir={ "up" : true, "down" : false, "left" : true, "right" : true});
        }
    };

    if (dir["down"]) {
        const downPos = keepMoving(board, start, end, 'down');
        console.log(downPos);
        console.log(start);
        if (downPos[0] !== start[0] || downPos[1] !== start[1]) {
            console.log("to down")
            down = 1 + slideGame(board, downPos, end, dir={ "up" : false, "down" : true, "left" : true, "right" : true});
        };
    };

    let res = Math.min(left, right, up, down);
    console.log(res);

};

const keepMoving = (board, start, end, dir) => {
    start1 = [start[0], start[1]];
    while (board[start1[0], start1[1]] != null && board[start1[0], start1[1]] !== 1) {
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