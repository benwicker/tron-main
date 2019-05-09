import { Directions } from "@/models/enums.js";

export class Controller {
    constructor (player, window, upKey, downKey, leftKey, rightKey) {
        this.player = player;
        this.window = window;
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;

        this.registerEvents();
    }

    registerEvents() {
        let _this = this;
        this.window.addEventListener("keyup", e => {
            switch (e.which) {
                case _this.upKey:
                  _this.player.currentDirection = Directions.UP;
                  break;
                case _this.downKey:
                  _this.player.currentDirection = Directions.DOWN;
                  break;
                case _this.leftKey:
                  _this.player.currentDirection = Directions.LEFT;
                  break;
                case _this.rightKey:
                  _this.player.currentDirection = Directions.RIGHT;
                  break;
                default:
                  return;
              }
        });
    }

    removeRegisteredEvents() {
      this.window.removeEventListener("keyup");
    }
}