document.addEventListener('DOMContentLoaded', function(){
  var matrix = matrixRandomizer(10,20);
  creatingRows(matrix);
  function creatingRows(matrix){
    var table = document.querySelector('#table');
    table.innerHTML = '';
    matrix.forEach(function(row){
      var $tr = document.createElement('tr');
      row.forEach(function(cellValue) {
        var $td = document.createElement('td');
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
   var newMatrix = matrixRandomizer(10,20);
   creatingRows(newMatrix);
   matrix = newMatrix;
  });

  document.querySelector('#startGame').addEventListener('click', function(){
    runGame = setInterval(function(){
      matrix = calculateNextState(matrix);
      creatingRows(matrix);
    },500);
  });

  document.querySelector('#pause').addEventListener('click',function(){
    clearInterval(runGame);
  });


  function livingNeighborCount(x, y){
    var neighborCount = 0;
    for (var i = x - 1; i <= x + 1; i++) {
     //This happens when there is no column at right boundary (i > #arrays -1 = #indexpositions)
      if ( i < 0 || i > matrix.length - 1){
      }
      else {
        //Loops the inner matrix, that has the value y (which is either alive or dead) inside)
        for (var j = y -1; j <= y+1; j++) {
          if ( j < 0 || j > matrix[i].length -1 || (x ===i && y === j) ){
          }
          else {
            if (matrix[i][j] === 1) {
              neighborCount += 1;
            }
          }
        }
      }
    }
    return neighborCount;
  }


    //currentState has the same value as matrix within calculateNextState(matrix)
  function calculateNextState(currentState){
    var nextState = [];
    currentState.forEach(function(currentRow, x){
      var nextRow = [];
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
