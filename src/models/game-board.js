export class GameBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.board = new Uint8Array(x * y);
    }

    getValue(queryX, queryY) {
        return this.board[queryX + (this.x * queryY)];
    }

    setValue(setX, setY, value) {
        this.board[setX + (this.x * setY)] = value;
    }

    reset() {
        this.board = new Uint8Array(this.x * this.y);
    }
}