<template>
  <div>
    <canvas id="tronCanvas" style="border: 1px solid" width="600" height="300"></canvas>
  </div>
</template>

<script>
import { Arrow } from "@/models/arrow.js";
import { Grid } from "@/models/tron-models.js"

export default {
    name: 'TronCanvas',
    data() {
        return {
            canvas: {},
            ctx: {}
        }
    },
    methods: {
        draw: function () {
            this.canvas = document.getElementById('tronCanvas');
            this.ctx = this.canvas.getContext('2d');
            
            let g = new Grid(this.canvas, this.ctx, 10);
            ctx.stroke(path2)
        }
    },
    mounted() {
        this.draw();
    },
};
</script>