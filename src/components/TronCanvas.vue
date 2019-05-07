<template>
  <div>
    <canvas id="tronCanvas" style="border: 1px solid" width="500" height="500"></canvas>
  </div>
</template>

<script>
import { Arrow } from "@/models/arrow.js";
import { Grid, Player, Directions } from "@/models/tron-models.js";

export default {
  name: "TronCanvas",
  data() {
    return {
      canvas: {},
      ctx: {},
      g: {},
      p1: {},
      raf: {},
    };
  },
  methods: {
    initField: function() {
      this.canvas = document.getElementById("tronCanvas");
      this.ctx = this.canvas.getContext("2d");
      this.g = new Grid(this.canvas.width, this.canvas.height, 100);
      this.p1 = new Player(this.g, 25, 25, Directions.RIGHT);

      this.ctx.strokeStyle = "rgba(22, 124, 124, 0.49)";
    //   this.ctx.stroke(this.g.createGrid());
      this.drawP1();
    },

    addEvents: function() {

    },

    progress: function() {
      this.p1.move();
      this.drawP1();
      var _this = this;
      setTimeout(() => {
        _this.raf = window.requestAnimationFrame(_this.progress);
      }, 100);
    },

    drawP1: function() {
      this.ctx.strokeStyle = "red";
      this.ctx.fill(this.p1.draw());
    }
  },
  mounted() {
    this.initField();
    this.addEvents();

    let _this = this;
    this.canvas.addEventListener("mouseover", e => {
      _this.raf = window.requestAnimationFrame(_this.progress);
    });

    this.canvas.addEventListener("mouseout", e => {
      window.cancelAnimationFrame(_this.raf);
    });
  }
};
</script>