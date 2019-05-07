export const Directions = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
}

export class Grid {
    
    constructor (w, h, numUnits) {
        this.w = w;
        this.h = h;
        this.numUnits = numUnits;

        // setup grid blocks
        this.xStep = w / numUnits;
        this.yStep = h / numUnits;
    }

    createGrid() {
        // init
        let g = new Path2D();
        g.strokeStyle = 'green';

        // draw vertical lines
        for (let x = this.xStep; x < this.w; x += this.xStep) {
            g.moveTo(x, 0);
            g.lineTo(x, this.h);
        }

        // // draw horizontal lines
        for (let y = this.yStep; y < this.h; y += this.yStep) {
            g.moveTo(0, y);
            g.lineTo(this.w, y);
        }

        return g;
    }

    draw(x, y) {
        let posx = x * this.xStep;
        let posy = y * this.yStep;

        let unit = new Path2D();
        unit.rect(posx, posy, this.xStep, this.yStep);

        return unit;
    }
}

export class Player {
    constructor (grid, x, y, dir) {
        this.grid = grid;
        this.x = x;
        this.y = y;
        this.currentDirection = dir;
    }

    draw() {
        return this.grid.draw(this.x, this.y);
    }

    moveDown() {
        this.y++;
        return this.grid.draw(this.x, this.y);
    }

    setDirection(dir) {
        this.currentDirection = dir;
    }

    move(){
        switch(this.currentDirection){
            case Directions.UP:
            this.y--;
            break;
            case Directions.DOWN:
            this.y++;
            break;
            case Directions.LEFT:
            this.x--;
            break;
            case Directions.RIGHT:
            this.x++;
            break;
        }

        return this.grid.draw(this.x, this.y);
    }
}

