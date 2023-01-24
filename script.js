const grid = document.getElementById('grid');

function createGrid(rowNumber) {
    let gridArea = rowNumber * rowNumber;
    grid.style.gridTemplateColumns = `repeat(${rowNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rowNumber}, 1fr)`;
    for(let i = 0; i < gridArea; i++) {
        let gridElement = document.createElement('div');
        grid.appendChild(gridElement);
        gridElement.addEventListener('mouseover', drawBlack);
        
    }
}
/*const buildGrid = function(size){
    grid.style.gridTemplateColumns = `'repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `'repeat(${size}, 1fr)`;

    for(i=size*size; i>0; i--){
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', drawBlack);
        grid.appendChild(gridElement);
        
        console.log(`buildGrid looped for the ${i}th time`); 
    }
}*/
const drawBlack = function(e){
    e.target.style.backgroundColor = 'black';
}
createGrid(100);




/*const buildGrid = function(gridNum){
    const grid = document.getElementById('grid');
    const rowNum = gridNum;
    let colNum = gridNum;
    for(i=rowNum;i>0;i--){
        
        const row = document.createElement('div');
        grid.appendChild(row);
        console.log(`Row looped for the ${i}th time`);
       
        for(i=colNum;i>0;i--){
            const col = document.createElement('div');
            row.appendChild(col);
            console.log(`Col looped for the ${i}th time`);
        }
        
    }
}*/
