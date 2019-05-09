<template>
  <div>
    <canvas
      id="tronCanvas"
      style="border: 1px solid"
      width="500"
      height="500"
    >Sorry you don't support canvas</canvas>
  </div>
</template>

<script>
import { Arrow } from "@/models/arrow.js";
import { Grid } from "@/models/grid.js";
import { Directions, Keys } from "@/models/enums.js";
import { Player } from "@/models/player.js";
import { Game } from "@/models/game.js";
import { Settings } from "@/models/settings.js";
import { Controller } from "@/models/controller.js";

export default {
  name: "TronCanvas",
  data() {
    return {
      game: {},
      canvas: {},
      ctx: {},
      g: {},
      raf: {},
      players: [
        new Player(25, 25, Directions.RIGHT, "red"),
        // new Player(25, 75, Directions.RIGHT, "blue"),
        // new Player(75, 25, Directions.LEFT, "green"),
        // new Player(75, 75, Directions.LEFT, "black")
      ],
      c: {}
    };
  },
  methods: {
    addEvents: function() {
      let _this = this;
      window.addEventListener("keyup", e => {
        if (e && e.code == Keys.SPACE){
          _this.game.start();
        }
      });
    },
  },
  mounted() {
    this.settings = new Settings(100, 100, 3, "rgba(22, 124, 124, 0.19)");
    this.canvas = document.getElementById("tronCanvas");

    // temp controller
    this.c = new Controller(this.players[0], window, Keys.UP, Keys.DOWN, Keys.LEFT, Keys.RIGHT);
    // ---------------
    
    this.game = new Game(this.players, this.settings, this.canvas);
    this.game.initGame();

    this.addEvents();
  }
};
</script>