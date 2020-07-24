import Grid from './grid.js';
import Cell from './cell.js';

const nextGenBtn = document.querySelector('.next-gen-btn');

/* This file contains two functions generating hard-coded grid and loop
to automaticly test the program based on examples one and two */

export const exampleOne = () => {
    const exampleOne = new Grid(3, 3);

    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++)
            if (i === 1) exampleOne.grid[i][j] = new Cell(1);
            else exampleOne.grid[i][j] = new Cell(0);
    for (var i = 0; i < 10; i++)
        exampleOne.nextGeneration();
            
    Grid.removeGrid();
    exampleOne.visualizeGrid();
    nextGenBtn.disabled = true;
    nextGenBtn.classList.add('disabled');
    console.log(`Grid[1][0] green generations: ${exampleOne.grid[0][1].greenGenerations}`);
}

export const exampleTwo = () => {
    const exampleTwo = new Grid(4, 4);
    exampleTwo.grid[0][0] = new Cell(1);
    exampleTwo.grid[0][1] = new Cell(0);
    exampleTwo.grid[0][2] = new Cell(0);
    exampleTwo.grid[0][3] = new Cell(1);
    exampleTwo.grid[1][0] = new Cell(1);
    exampleTwo.grid[1][1] = new Cell(1);
    exampleTwo.grid[1][2] = new Cell(1);
    exampleTwo.grid[1][3] = new Cell(1);
    exampleTwo.grid[2][0] = new Cell(0);
    exampleTwo.grid[2][1] = new Cell(1);
    exampleTwo.grid[2][2] = new Cell(0);
    exampleTwo.grid[2][3] = new Cell(0);
    exampleTwo.grid[3][0] = new Cell(1);
    exampleTwo.grid[3][1] = new Cell(0);
    exampleTwo.grid[3][2] = new Cell(1);
    exampleTwo.grid[3][3] = new Cell(0);

    for (var i = 0; i < 15; i++)
        exampleTwo.nextGeneration();

    Grid.removeGrid();
    exampleTwo.visualizeGrid();
    nextGenBtn.disabled = true;
    nextGenBtn.classList.add('disabled');
    console.log(`Grid[2][2] green generations: ${exampleTwo.grid[2][2].greenGenerations}`);
}
