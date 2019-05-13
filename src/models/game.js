import { Grid } from "./grid";
import { GameBoard } from "@/models/game-board.js";
import { GameStates } from "@/models/enums.js";


export class Game {
    constructor (players, settings, canvas) {
        // values from input
        this.sizeX = settings.gameWidth;
        this.sizeY = settings.gameHeight;
        this.players = players;
        this.settings = settings;
        this.canvas = canvas;

        // init
        this.ctx = this.canvas.getContext("2d");
        this.gameState = GameStates.NOT_STARTED;
        this.crashedPlayers = [];
        this.gameBoard = new GameBoard(this.sizeX, this.sizeY);
        this.grid = new Grid(this.canvas.width, this.canvas.height, this.sizeX, this.sizeY);
        this.raf = null;
        this.startTime = null;

        // 2D objects
        this.gridPath = new Path2D();
        this.overlayPath = new Path2D();
    }

    initGame() {
        // clear anything old out
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gameState = GameStates.NOT_STARTED;
        this.gameBoard.reset();
        // put crashed players into the players category
        this.startTime = null;

        // draw grid
        this.gridPath = this.grid.createGrid();
        this.ctx.strokeStyle = this.settings.gridColor;
        this.ctx.stroke(this.gridPath);

        // get player 2d objects
        this.players.forEach((p) => {
            // clear out old player data
            p.reset();

            // draw the player on the starting position
            p.path.addPath(this.grid.draw(p.x, p.y));
            this.ctx.fillStyle = p.color;
            this.ctx.fill(p.path);
        });

        // get text overlay
        // todo: implement this section
    }

    start() {
        if (this.gameState == GameStates.NOT_STARTED || this.gameState == GameStates.PAUSED) {
            this.gameState = GameStates.IN_PROGRESS;
            this.raf = window.requestAnimationFrame(this.updateGame.bind(this));
        }

        else if (this.gameState == GameStates.IN_PROGRESS) {
            this.gameState = GameStates.PAUSED;
            window.cancelAnimationFrame(this.raf);
            this.raf = 0;
        }

        else if (this.gameState == GameStates.GAME_OVER) {
            this.initGame();
        }
    }

    updateGame(timestamp) {
        this.startTime = this.startTime || timestamp; // initialize as needed
        let timeElapsed = (timestamp - this.startTime) / 10;
        
        if (timeElapsed >= this.settings.gameSpeed) {
            this.startTime = timestamp;
            this.players.forEach((p, i) => {
                p.move();                

                // detect collision with other players heads

                if (this.detectOutOfBounds(p.x, p.y)) {
                    console.log("out of bounds - x: " + p.x + ", y: " + p.y);
                    this.gameOver();
                    return;
                }

                if (this.detectCollisionWithLine(p.x, p.y)) {
                    console.log("collision with line - x: " + p.x + ", y: " + p.y);
                    this.gameOver();
                    return;
                }

                // no collision and player is still alive
                this.gameBoard.setValue(p.x, p.y, i + 1);
                p.path.addPath(this.grid.draw(p.x, p.y));
                this.ctx.fillStyle = p.color;
                this.ctx.fill(p.path);
            });
        }

        if (this.raf) {
            this.raf = window.requestAnimationFrame(this.updateGame.bind(this));
        }
    }

    gameOver() {
        this.gameState = GameStates.GAME_OVER;
        window.cancelAnimationFrame(this.raf);
        this.raf = 0;
        // alert("GAME OVER");
    }

    detectOutOfBounds(x, y) {
        return (x < 0 || x > this.sizeX || y < 0 || y > this.sizeY);
    }

    detectCollisionWithLine(x, y) {
        return this.gameBoard.getValue(x, y);
    }

}