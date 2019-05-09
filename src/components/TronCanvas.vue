<template>
  <div>
    <canvas
      id="tronCanvas"
      style="border: 1px solid"
      width="600"
      height="600"
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
      players: [
        new Player(100, 100, Directions.RIGHT, "purple"),
        // new Player(25, 75, Directions.RIGHT, "blue"),
        new Player(600, 600, Directions.LEFT, "orange"),
        // new Player(75, 75, Directions.LEFT, "black")
      ],
      c1: {},
      c2: {}
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
    this.canvas = document.getElementById("tronCanvas");

    this.settings = new Settings(700, 700, 0, "rgba(22, 124, 124, 0.19)");

    // temp controller
    this.c1 = new Controller(this.players[0], window, Keys.W, Keys.S, Keys.A, Keys.D);
    this.c2 = new Controller(this.players[1], window, Keys.UP, Keys.DOWN, Keys.LEFT, Keys.RIGHT);
    // ---------------
    
    this.game = new Game(this.players, this.settings, this.canvas);
    this.game.initGame();

    this.addEvents();
  }
};
</script>