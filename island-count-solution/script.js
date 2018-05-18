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
  let visited = [];

  for(var i = 0; i < matrix.length; i++) {
    visited[i] = new Array(matrix[i].length).map(function(i) { return false; });
  }

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++){
      if(matrix[row][col] == 1 && !visited[row][col]){
        total ++;
        searchForLand(matrix, row, col, visited);
      }
    }
  }
  return total;
}

function searchForLand(matrix, row, col, visited) {
  let rowPlus1  = row + 1;
  let columnPlus1  = col + 1
  let columnMinus1 = col - 1;
  visited[row][col] = true;

  if (matrix[row][col] == 1) {
      matrix[row][col] = 0;                     
      searchForLand(matrix, rowPlus1, col, visited);          // Recurse South
      searchForLand(matrix, row, columnPlus1, visited);       // Recurse East
      searchForLand(matrix, rowPlus1, columnPlus1, visited);  // Recures diagonal Southeast
      searchForLand(matrix, rowPlus1, columnMinus1, visited); // Recures diagonal Southwest
  }
}

console.log(islandFinder(graph));


