//Etch a Sketch Project
//Display a grid of divs that flex to fill a box
//Hovering a mouse over a div changes the color of that div

//const screen = document.getElementById('screen');

const buildGrid = function(num) {
    let container = '';
    container = document.getElementById('#screen');
    let box = document.getElementById('#screen div');

    for(i=num;i>=0;i--){
        const div = document.createElement('div');
        container.appendChild('div');
        div.style.backgroundColor = 'blue';
        div.setAttribute('style', 'width: 200px; height: 200px;');
        console.log(`div number:${i} created`);
    }
}

buildGrid(9);
console.log(container);

const buildRow = function(num){
    const square = num;
    for(i=num;i>0;i--){
        const buildBox = function(square){
            for(i=num;i>0;i--){
            const box = document.querySelector('.box');
//My brain is powering down. I left off trying to make rows of divs to form a grid.
//div.classList.add('new') somehow add row divs to column divs??
            const row = 

            const div = document.createElement('div');
            div.style.flex = '1 1 auto';
            div.style.backgroundColor = 'blue';
            div.style.border = 'solid';
            box.appendChild(div);
            }
            }
    }
}


buildRow(4);