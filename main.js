document.addEventListener('DOMContentLoaded', function(){

var matrix = [ [0,1,0], [1,1,0], [1,1,1] ];

for (var i = 0; i < 3; i++){
  addToTable("grid");
}

function addToTable(tableID){
  var table = document.getElementById(tableID);
  var newRow = table.insertRow(0);
  var cell1 = newRow.insertCell(0);
  var newText1 = document.createTextNode(matrix[i]);
  cell1.appendChild(newText1);
}

});
