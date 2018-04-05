// Select color input
// Select size input

var color = document.querySelector('#colorPicker');
var height = document.querySelector('#input_height');
var width = document.querySelector('#input_width');

var button = document.querySelector('#btn');
var table = document.querySelector('#pixel_canvas');

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  let h = height.value;
  let w = width.value;

  // Clear table
  for (let i = table.rows.length; i > 0 ; i--) {
    table.deleteRow(i - 1);
  }

  for (let y = 0; y < h; y++) {
    const newTr = document.createElement('tr');
    table.appendChild(newTr);
      for (let x = 0; x < w; x++) {
        const newTd = document.createElement('td');
        table.lastChild.appendChild(newTd);
      }
  }

  let cell = table.querySelectorAll('td');

  for (let i = 0; i < cell.length; i++) {
    cell.item(i).addEventListener('click', function () {
      this.style.backgroundColor = color.value;
    });
  }
}

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  makeGrid();
});
