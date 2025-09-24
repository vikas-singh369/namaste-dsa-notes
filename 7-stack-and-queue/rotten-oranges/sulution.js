/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    let m = grid.length;
    let n = grid[0].length;
    let queue = [];

    // 1 step traver the whole grid and find rotten oranges push into queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }

    let maxMin = 0;

    // make all rotten adjesent rotten and push index into queue and make sure boundaries

    while (queue.length) {
        // console.table(grid);
        let [x, y, level] = queue.shift();
        // console.log("Processing:", x, y, "at level", level);


        // left side checking ( row -1 )
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1])
        }

        // right side checking ( row + 1)
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1])
        }

        // top side checking ( col - 1 )
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1])
        }

        // bottom side checking ( col + 1)
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }


        maxMin = Math.max(level, maxMin);
    }


    // traverse the whole grid ones again find fresh orange if fresh oranage remaining return -1 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    // other wise return mitues that take to whole grid oranges rotten 

    return maxMin;
};