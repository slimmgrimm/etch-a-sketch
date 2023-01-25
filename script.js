const grid = document.getElementById('grid');

function createGrid(rowNumber) {
    eraseGrid();
    let gridArea = rowNumber * rowNumber;
    grid.style.gridTemplateColumns = `repeat(${rowNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rowNumber}, 1fr)`;
    for(let i = 0; i < gridArea; i++) {
        let gridElement = document.createElement('div');
        grid.appendChild(gridElement);
        gridElement.addEventListener('mouseover', drawBlack);        
    }
}

const drawBlack = function(e){
    e.target.style.backgroundColor = 'black';
}

function eraseGrid(){
    grid.innerHTML = '';
}

createGrid(16);
