const graph = [
  [1, 1, 1, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// Output = 5

function islandFinder(matrix) {
  let total = 0;

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++){
      if(matrix[row][col] == 1){
        total ++;
        searchForLand(matrix, row, col);
      }
    }
  }
  return total;
}

function searchForLand(matrix, row, col) {
  let rowPlus1  = row + 1;
  let columnPlus1  = col + 1
  let columnMinus1 = col - 1;

  if (matrix[row][col] == 1) {
      matrix[row][col] = 0;                     
      searchForLand(matrix, rowPlus1, col);       // Recurse South
      searchForLand(matrix, row, columnPlus1);       // Recurse East
      searchForLand(matrix, rowPlus1, columnPlus1);  // Recures diagonal Southeast
      searchForLand(matrix, rowPlus1, columnMinus1); // Recures diagonal Southwest
  }
}

console.log(islandFinder(graph));

