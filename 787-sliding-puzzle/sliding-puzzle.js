/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const target = '123450';
    const rows=2, cols=3;
    const start=board[0].concat(board[1]).map(String).join("");

    const directions = [
        [-1, 0], //up
        [1,0],//down
        [0, -1],//left
        [0,1]//right
    ];

    const queue = [];
    queue.push([start, start.indexOf("0"), 0]);//current state, index of 0, moves
    const visited = new Set();
    visited.add(start);


    while(queue.length>0){
        const current = queue.shift()//dequeue first state
        const boardState = current[0]//current board state as string
        const zeroIndex = current[1];//positoin of 0
        const moves = current[2]//number of total moves yet
        if(boardState === target) return moves;

        const zeroRow = Math.floor(zeroIndex/cols)
        const zeroCol = zeroIndex%cols;

        for(let i = 0; i< directions.length;i++){
            const newRow = zeroRow + directions[i][0];
            const newCol = zeroCol + directions[i][1];
             if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                const newZeroIndex = newRow * cols + newCol; // New index for '0'

                // Swap '0' with the adjacent number
                const newBoard = boardState.split(""); // Convert string to array
                const temp = newBoard[zeroIndex];
                newBoard[zeroIndex] = newBoard[newZeroIndex];
                newBoard[newZeroIndex] = temp;

                const newBoardState = newBoard.join(""); // Convert back to string

                // if state not visited add to queue
                if (!visited.has(newBoardState)) {
                    visited.add(newBoardState);
                    queue.push([newBoardState, newZeroIndex, moves + 1]);
                }
            }
        }
    }

    // If no solution is found
    return -1;
};
