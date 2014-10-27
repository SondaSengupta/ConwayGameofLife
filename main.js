var matrix = [ [0,1,0], [1,1,0], [1,1,1] ];

document.addEventListener('DOMContentLoaded', function(){
  table.innerHTML = '';
  matrix.forEach(creatingTable);
});

function creatingTable(element){
  var table = document.querySelector('#table');
  $tr = document.createElement('tr');
  table.appendChild($tr);
  element.forEach(function() {
      var $td = document.createElement('td');
      $tr.appendChild($td);
      });
}
