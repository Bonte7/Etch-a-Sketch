let grid = document.getElementById("grid-container");
let clearButton = document.getElementById("clear-button");
//const color = prompt("Choose a color!");

let default_size = 16;


//create the grid and add grid squares to it
function createGrid(size) {
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++) {
            let square = document.createElement("div");
            square.classList.add("grid-square");
            grid.appendChild(square);
    }
}

createGrid(default_size);

//add mousover event to grid squares
grid.addEventListener("mouseover", addEvent);

//handle mouseover events and change colors
function addEvent(event) {
    if(event.target.matches("div.grid-square")) {
        let square = event.target;
        square.classList.add("active");
        //square.style.backgroundColor = color;
    }
}

clearButton.addEventListener("click", reset);

function reset() {
    while(grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    let newSize = prompt("Enter the grid size, you'd like! You can choose anywhere between 8 - 50");
    
    if(newSize < 8 || newSize > 50) {
        newSize = 16;
        alert("You entered a size outside of 8-50");
    }
    createGrid(newSize);
}


