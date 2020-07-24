export default class Cell {
    constructor(color) {
        this.color = color;
        this.greenGenerations = this.color === 1 ? 1 : 0;
    }
    
    getNeighbours(x, y, grid) {
        const getNeighbour = (x, y) => {
            let value;
            
            /* Catching Uncaught TypeError: Cannot read property '-1' of undefined and returning null instead */
            try { value = grid[x][y].color === 1 ? 1 : null; }
            finally { return value; }
        }
        const neighboursColor = {
               upLeft : getNeighbour(x-1, y-1),
                upMid : getNeighbour(x-1, y),
              upRight : getNeighbour(x-1, y+1),
                 left : getNeighbour(x, y-1),
                right : getNeighbour(x, y+1),
             downLeft : getNeighbour(x+1, y-1),
              downMid : getNeighbour(x+1, y),
            downRight : getNeighbour(x+1, y+1)
        };
        let greenNeighbours = 0;
        
        for (const [_, value] of Object.entries(neighboursColor))
            if (value === 1) greenNeighbours++;

        return greenNeighbours;
    }
}