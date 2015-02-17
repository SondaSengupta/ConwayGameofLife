document.addEventListener('DOMContentLoaded', function(){
  var matrix = matrixRandomizer(10,10);
  creatingRows(matrix);
  function creatingRows(matrix){
    var table = document.querySelector('#table');
    table.innerHTML = '';
    matrix.forEach(function(row){
      var $tr = document.createElement('tr');
      row.forEach(function(cellValue) {
        var $td = document.createElement('td');
        $td.textContent = cellValue;
        if (cellValue === 1){
          $td.classList.add('alive');
        } else {
          $td.classList.add('dead');
        }
        $tr.appendChild($td);      
      });
      table.appendChild($tr);
    });
  }  

  var runGame; //is an empty variable until tick is clicked
  document.querySelector('#newGame').addEventListener('click',function(){
   clearInterval(runGame);
   var newMatrix = matrixRandomizer(10,10);
   creatingRows(newMatrix);
  });

  document.querySelector('#tick').addEventListener('click', function(){
    runGame = setInterval(function(){
      matrix = calculateNextState(matrix);
      creatingRows(matrix);
    },500);  
  });

  document.querySelector('#pause').addEventListener('click',function(){
    clearInterval(runGame);  
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
      nextRow.push(currentCell);
      });
      nextState.push(nextRow);
    });
    return nextState;
  }

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
});