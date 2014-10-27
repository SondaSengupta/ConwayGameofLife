document.addEventListener('DOMContentLoaded', function(){
  setInterval(function(){
    table.innerHTML = '';
    var matrix = matrixRandomizer(4,4);
    matrix.forEach(creatingTable);
  },1000);
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
          $td.style.backgroundColor="grey";
          $td.innerHTML = ":(";
        }
        else {
          $td.style.backgroundColor="green";
          $td.innerHTML = ":)";
        }
    });
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
