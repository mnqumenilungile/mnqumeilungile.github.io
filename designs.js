(function() {
  'use strict';

  // set variables
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixel_canvas");

  // add size listener
  $sizePicker.addEventListener('submit', function() {
    // prevent page refresh on submit
    event.preventDefault();

    // input data in draw grid
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    makeGrid(width, height);
  })

  // grid
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 1; row < width; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < height; cell++ ) {
          // add cell color
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        }
    }
  }

  // change color listener if clicked
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();
