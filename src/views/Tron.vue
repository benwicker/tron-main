<template>
  <div class="tron">
    <tron-canvas></tron-canvas>
    <hr>

    <b-row class="justify-content-md-center">
      <b-col sm="2">Game Speed = {{settings.gameSpeed}}</b-col>
      <b-col sm="5">
        <b-form-input type="range" v-model="settings.gameSpeed" min="0" max="50"></b-form-input>
      </b-col>
    </b-row>
        <b-row class="justify-content-md-center">
      <b-col sm="2">Grid Color</b-col>
      <b-col sm="5">
        <b-form-input type="color" v-model="settings.gridColor"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TronCanvas from "@/components/TronCanvas.vue";

export default {
  components: {
    TronCanvas
  },
  data() {
    return {
      settings: {
        gameSpeed: "3",
        gridColor: "rgba(22, 124, 124, 0.19)"
      }
    };
  }
};
</script>
