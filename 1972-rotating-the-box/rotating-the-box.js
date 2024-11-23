/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
        const m = box.length, n = box[0].length;
    const result = Array.from({ length: n }, () => Array(m).fill('.'));
    for (let i = 0; i < m; i++) {
        let empty = n - 1;
        for (let j = n - 1; j >= 0; j--) {
            if (box[i][j] === '#') {
                result[empty--][m - 1 - i] = '#';
            } else if (box[i][j] === '*') {
                result[j][m - 1 - i] = '*';
                empty = j - 1;
            }
        }
    }
    return result;
};