import Cell from './cell.js'

export default class Grid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.grid = this.generationZero();
    }

    generationZero() {
        const grid = [];
        for (var i = 0; i < this.x; i++) {
            grid[i] = [];
            for (var j = 0; j < this.y; j++)
                grid[i][j] = new Cell(Math.floor(Math.random() * 2));
        }
        return grid;
    }

    nextGeneration() {
        /* Deep copy required, otherwise makes a reference */
        const prevGen = this.deepCopy(this.grid);
        for (var i = 0; i < prevGen.length; i++)
            for (var j = 0; j < prevGen[i].length; j++) {
                const greenNeighbours = prevGen[i][j].getNeighbours(i, j, prevGen);
                /* Checking conditions where the cell doesnt change its color is unnecessary */
                if  (prevGen[i][j].color === 0 &&
                    (greenNeighbours === 3 || greenNeighbours === 6)) {
                        this.grid[i][j].color = 1;
                        this.grid[i][j].greenGenerations += 1;
                } else if  (prevGen[i][j].color === 1 &&
                           (greenNeighbours === 0 ||
                            greenNeighbours === 1 ||
                            greenNeighbours === 4 ||
                            greenNeighbours === 5 ||
                            greenNeighbours === 7 ||
                            greenNeighbours === 8))
                                this.grid[i][j].color = 0;
                }
    }

    visualizeGrid() {
        const board = document.querySelector('.board');
        for (var i = 0; i < this.x; i++)
            for (var j = 0; j <= this.y; j++)
                /* The second loop runs again after the last cell of each row to add a <br> */
                if (this.grid[i][j] === undefined) board.appendChild(document.createElement('br'));
                else {
                    const cell = document.createElement('span');
                    cell.innerHTML = 
                       `X: ${j}<br/>
                        Y: ${i}<br/>
                        N: ${this.grid[i][j].greenGenerations}`;
                    this.grid[i][j].color === 1 ? cell.classList.add('green', 'cell') : cell.classList.add('red', 'cell');
                    board.appendChild(cell);
                }
    }

    /* Iterates the grid, calls itself and performs different operations based on the type of the element */
    deepCopy(grid) {
        const copy = [];
        const deepCopyObject = obj => {
            const tempObj = new Cell();
            for (const [key, value] of Object.entries(obj))
                if (Array.isArray(value)) tempObj[key] = deepCopy(value);
                 else
                    if (typeof value === 'object') tempObj[key] = deepCopyObject(value);
                    else tempObj[key] = value;
            return tempObj;
        };

        grid.forEach(elem => {
            if (Array.isArray(elem)) copy.push(this.deepCopy(elem));
            else
                if (typeof elem === 'object') copy.push(deepCopyObject(elem));
                else copy.push(elem);
        });
        return copy;
    }

    static removeGrid() {
        const elements = document.querySelectorAll('.cell, br');
        elements.forEach(element => element.parentNode.removeChild(element));
    }
}