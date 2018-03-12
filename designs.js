// Select color input
// Select size input

var color = $("#colorPicker");
var height = $("#input_height");
var width = $("#input_width");

var button = $("#btn");
var table = $("#pixel_canvas");

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    let h = height.val();
    let w = width.val();

    table.empty();

    for (var y = 0; y < h; y++){
        table.append("<tr></tr>");
        for (var x = 0; x < w; x++) {
            table.children(":last-child").append("<td></td>");
        }
    }

    var cell = table.find("td");

    cell.on( 'click', function() {
        $(this).css( "background-color", color.val() );
    });
}

button.on( 'click', function( evt ) {
    evt.preventDefault();
    makeGrid();
});

