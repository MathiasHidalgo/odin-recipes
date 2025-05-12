const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
        


function createGrid(size) {
    makeRows(size);
}


function makeRows(size) {
    for(let r = 0; r < size; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
        makeColumns(row, size);
    }
}

function makeColumns(row, cellNum) {
    for (j = 0; j < cellNum; j++) {
        let newCell = document.createElement("div");
        row.appendChild(newCell).className = "cell";
    }
}

const button = document.getElementById('Btn');
button.addEventListener('click', theNewGrid);
    
function getNewGrid() {
    container.innerText = ''; 
}

function theNewGrid(){
       getNewGrid();
       let number = prompt("How many squares per side for the new grid?" );
       createGrid(number); 
};
 