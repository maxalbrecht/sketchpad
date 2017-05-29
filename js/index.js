var countx = 1;
var county = 1;
var maxx = 60;
var maxy = 60;
var gridSize = 700;
var cellSize = 1;

function populateGrid() {
  while (countx <= maxx) {
    $(".grid").append("<div id='"+"row"+countx+"'" + "class=row>" + /*countx + */"</div>");
    while (county <= maxy) {
      $("#"+"row"+countx).append("<div id='"+"column"+county+"'" + "class=column>" + /*county +*/ "</div>");
      county = county + 1;
    }
    countx = countx + 1;
    county = 1;
  }

  cellSize = (gridSize - 2) / maxy;
  $(".row").height(cellSize);
  $(".column").height(cellSize);
  $(".column").width(cellSize);

  $( ".column" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
    $(this).css("background-color","black");
  });
}

function main() {
  populateGrid();
}

$(document).ready(main);

function refresh() {
    var gridSize = prompt("Enter the number of cells per side you would like to use in the sketchpad", "16");
    maxx = gridSize;
    maxy = gridSize;
    $(".grid").empty();

    county = 1;
    countx = 1;
    populateGrid();
}
