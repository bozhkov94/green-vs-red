import Grid from './grid.js'
import { exampleOne, exampleTwo } from './tests.js';

let grid;
const nextGenBtn = document.querySelector('.next-gen-btn');

document.querySelector('.gen-zero-btn').addEventListener('click', () => {
    const width = document.querySelector('.width').value;
    const height = document.querySelector('.height').value;
    if (height < 1_000 && width <= height) {
        Grid.removeGrid();
        grid = new Grid(width, height);
        grid.visualizeGrid();
        nextGenBtn.disabled = false;
        nextGenBtn.classList.remove('disabled')
    } else alert('Width <= Height < 1 000');
});

nextGenBtn.addEventListener('click', () => {
    Grid.removeGrid();
    grid.nextGeneration();
    grid.visualizeGrid();
});

document.querySelector('.example1-btn').addEventListener('click', () => { exampleOne(); });
document.querySelector('.example2-btn').addEventListener('click', () => { exampleTwo(); });