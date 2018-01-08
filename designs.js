// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height, width, color, tableCanvas, pixelCanvas;

$('#sizePicker').submit(function(e) {
    e.preventDefault();

    height = $('#input_height').val();
    width = $('#input_width').val();
    pixelCanvas = $('#pixel_canvas');
    tableCanvas = '';

    makeGrid(height, width);
    colorClick();
});

function makeGrid(height, width) {
    if (pixelCanvas.children().length) {
        pixelCanvas.html(tableCanvas);
    }

    for (var i = 0; i < height; i++) {
        tableCanvas += "<tr>";
        for (let x = 0; x < width; x++) {
            tableCanvas += "<td></td>";
        }
        tableCanvas += "</tr>";
    }
    
    pixelCanvas.html(tableCanvas);
    pixelCanvas.css("background-color", "#fff");
};

function colorClick(){
    $('#pixel_canvas').click(function(e) {
        color = $('#colorPicker').val();
        $(e.target).css('background-color', color);
    });
}
