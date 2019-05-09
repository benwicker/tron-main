import {
  Directions
} from "@/models/enums.js";

export class Controller {
  constructor(player, window, upKey, downKey, leftKey, rightKey) {
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
      switch (e.code) {
        case _this.upKey:
          if (_this.player.currentDirection != Directions.DOWN) {
            _this.player.currentDirection = Directions.UP;
          }
          break;
        case _this.downKey:
          if (_this.player.currentDirection != Directions.UP) {
            _this.player.currentDirection = Directions.DOWN;
          }
          break;
        case _this.leftKey:
          if (_this.player.currentDirection != Directions.RIGHT) {
            _this.player.currentDirection = Directions.LEFT;
          }
          break;
        case _this.rightKey:
          if (_this.player.currentDirection != Directions.LEFT) {
            _this.player.currentDirection = Directions.RIGHT;
          }
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