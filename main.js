var matrix = [ [0,1,0], [1,1,0], [1,1,1] ];
var $td


document.addEventListener('DOMContentLoaded', function(){
  table.innerHTML = '';
  matrix.forEach(creatingTable);
});

function creatingTable(row){
  var table = document.querySelector('#table');
  $tr = document.createElement('tr');
  table.appendChild($tr);
  row.forEach(function(cell) {
      $td = document.createElement('td');
      $tr.appendChild($td);
      $td.style.width = "40px";
      $td.style.height = "40px";
        if (cell === 1){
          $td.style.backgroundColor="black";
        }
        else {
          $td.style.backgroundColor="green";
        }
    });
}

function matrixRandom(x,y){
  var matrix=[];
  for (var i=0; i < x; i++) {
    matrix[i]=[];
    for(var j=0; j < y; j++) {
      matrix[i][j]=Math.round(Math.random());
    }
  }
  return matrix
}
