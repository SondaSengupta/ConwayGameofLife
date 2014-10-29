var matrix = [[0,0,0],[1,1,1],[0,0,0]]
    //var matrix = matrixRandomizer(40,40);

document.addEventListener('DOMContentLoaded', function(){
matrix.forEach(creatingRows);
  function creatingRows(rowValue){
    var table = document.querySelector('#table');
    var $tr = document.createElement('tr');
    table.appendChild($tr);
    rowValue.forEach(function(cellValue) {
    var $td = document.createElement('td');
$td.textContent = cellValue;
    if (cellValue === 1){
      $td.classList.add('alive');
    } else {
      $td.classList.add('dead');
    }
    $tr.appendChild($td);
  });
}

document.querySelector('#tick').addEventListener('click', function(){
setInterval(function(){
    table.innerHTML = '';
    matrix = calculateNextState(matrix);
    matrix.forEach(creatingRows);
  },500);
  });
});



  function livingNeighborCount(x, y){
    //Counts the value of neighboring cells with a count starting at zero
    var neighborCount = 0;

    for (var i = x - 1; i <= x + 1; i++) {
     //This happens when there is no column at right boundary (i > #arrays -1 = #indexpositions)
      if ( i < 0 || i > matrix.length - 1){
      }
      else {
        //Loops the inner matrix, that has the value y (which is either alive or dead) inside)
        for (var j = y -1; j <= y+1; j++) {
          //If y is undefined, this else statement is skipped and goto return NeighborCount
          //You don't want to pick the value that is more than adjacent left (j < 0 b/c y=0 or less)
          //You don't want to pick the value more than than what's adjacent right 
          //You don't want to pick the interested cell either towards the count
          if ( j < 0 || j > matrix[i].length -1 || (x ===i && y === j) ){
          }
          else {
            //If the value of ij is 1, then add it to our counter
            if (matrix[i][j] === 1) {
              neighborCount += 1;
            }
          }
        }
      } 
    }
    //return the sum of the counter after doing all the values within all the column adjacent to the cell
    return neighborCount;
  } 


    //currentState has the same value as matrix within calculateNextState(matrix)
  function calculateNextState(currentState){
    //nextState, nextRow,and nextCellState are each temporary stores in which livingNeighborCount
    //will go into nextCellState. NextCellState value is appended into the nextRow array.
    //nextRow array is appended onto the nextState array 
    //nextState will become the new matrix to generateGrid
    var nextState = [];
    //CurrentRow is the value of running the currentState.forEach loop
    //x is the position or index of the array we are currently running the loop on starting with 0.
    currentState.forEach(function(currentRow, x){
      var nextRow = [];
      //currentCell is the value of running the forEach loop with 1 number each
      //y is the position of the cell within an array
      currentRow.forEach(function(currentCell, y){
        console.log(currentCell);
        var nextCellState = livingNeighborCount(x, y);
      if (nextCellState === 2) { 
        currentCell = currentCell;
      } else if (nextCellState < 2) {
        currentCell = 0;
      } else if (nextCellState > 3) {
        currentCell = 0;
      } else if (nextCellState === 3) {
        currentCell = 1;
      }


        // Rule 1. Less than 2 neighbors = die of loneliness
        // Rule 2. Things stay the same unless they change (inertia)
        // Rule 3. More than 3 neighbors = death by overpopulation
        // Rule 4. Exactly 3 neighbors = birth
        console.log(currentCell);
        nextRow.push(currentCell);
      });
      nextState.push(nextRow);
    });
    return nextState;
  }


/*
function matrixRandomizer(numberofRow,numberofColumn){
  var matrix=[];
  for (var i=0; i < numberofRow; i++) {
    matrix[i]=[];
    for(var j=0; j < numberofColumn; j++) {
      matrix[i][j]=Math.round(Math.random());
    }
  }
  return matrix
}
*/
