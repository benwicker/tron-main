import { Directions } from "@/models/enums.js";

export class Player {
    constructor(id, x, y, dir, color) {
        this.id = id;
        this.startX = x;
        this.startY = y;
        this.startDirection = dir;
        this.x = x;
        this.y = y;
        this.currentDirection = dir;
        this.color = color;
        this.wins = 0;
        this.path = new Path2D();
    }

    setDirection(dir) {
        this.currentDirection = dir;
    }

    move() {
        switch (this.currentDirection) {
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
    }

    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.currentDirection = this.startDirection;
        this.path = new Path2D();
    }
}