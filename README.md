# project
<!DOCTYPE html>
<html>
<head>
    <title>Pixel Art Maker!</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Monoton">
    <stylesheet>
    body {
    text-align: center;
}

h1 {
    font-family: Monoton;
    font-size: 70px;
    margin: 0.2em;
}

h2 {
    margin: 1em 0 0.25em;
}

h2:first-of-type {
    margin-top: 0.5em;
}

table, tr, td {
    border: 1px solid blue;
}

table {
    border-collapse: collapse;
    margin: 0 auto;
}

tr {
    height: 20px;
}

td {
    width: 20px;
}

input[type=number] {
    width: 6em;
}

    </stylesheet>
</head>
<body>
    <h1>Lab: Pixel Art Maker</h1>

    <h2>Choose Grid Size</h2>
    <form id="sizePicker">
        <label>Grid Height:
          <input type="number" id="input_height" name="height" min="1" value="1" max="60" required>
        </label>
        <label>Grid Width:
          <input type="number" id="input_width" name="width" min="1" value="1" max="60" required>
        </label>
        <input type="submit">
    </form>

    <h2>Pick A Color</h2>
    <input type="color" id="colorPicker" value="#02b3e4">

    <h2>Design Canvas</h2>
    <table id="pixel_canvas"></table>

    <script>
    (function() {
  'use strict';

  // set global variables
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixel_canvas");

  // add listener to select grid size
  $sizePicker.addEventListener('submit', function() {
    // prevent page refresh on submit
    event.preventDefault();

    // get input data and draw grid
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    makeGrid(width, height);
  })

  // Draw grid
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 0; row < width; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < height; cell++ ) {
          // add new cell with listener to change color
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        }
    }
  }

  // change the color of the clicked cell to current color
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();

    </script>
</body>
</html>
