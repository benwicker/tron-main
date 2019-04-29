<template>
  <div>
    <canvas id="tronCanvas" style="border: 1px solid" width="500" height="500"></canvas>
  </div>
</template>

<script>
import { Arrow } from "@/models/arrow.js";
import { Grid, Player } from "@/models/tron-models.js"

export default {
    name: 'TronCanvas',
    data() {
        return {
            canvas: {},
            ctx: {},
            g: {},
            p1: {}
        }
    },
    methods: {
        draw: function () {
            this.canvas = document.getElementById('tronCanvas');
            this.ctx = this.canvas.getContext('2d');
            this.g = new Grid(this.canvas.width, this.canvas.height, 50);
            this.p1 = new Player(this.g, 0, 0);


            this.ctx.strokeStyle = 'rgba(22, 124, 124, 0.49)';
            this.ctx.stroke(this.g.createGrid());

            this.drawP1();
            this.p1.moveDown();
            this.drawP1();
            this.p1.moveDown();
            this.drawP1();
            this.p1.moveDown();
            this.drawP1();
        },

        drawP1: function () {
            this.ctx.strokeStyle = "red";
            this.ctx.fill(this.p1.draw());
        }
    },
    mounted() {
        this.draw();
    },
};
</script>