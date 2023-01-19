//Etch a Sketch Project
//Display a grid of divs that flex to fill a box
//Hovering a mouse over a div changes the color of that div

//const screen = document.getElementById('screen');

const buildGrid = function(num) {
    const container = document.querySelector('#screen');
    const box = container.querySelectorAll('div');

    for(i=num;i>=0;i--){
        document.createElement('div');
        console.log(`div number:${i} created`);
    }
    box.textContent = 'Hi';
}

buildGrid(9);