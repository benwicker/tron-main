import { Directions } from "@/models/enums.js";

export class Player {
    constructor(x, y, dir, color) {
        this.x = x;
        this.y = y;
        this.currentDirection = dir;
        this.color = color;
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
        console.log("not implemented yet");
    }
}