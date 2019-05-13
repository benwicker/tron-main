<template>
  <div>
    <b-row>
      <b-col sm="4" class="text-right">Game Speed: {{settings.gameSpeed}}</b-col>
      <b-col sm="8">
        <b-form-input type="range" min="0" max="50" v-model="settings.gameSpeed"></b-form-input>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col sm="4" class="text-right">Game Size:</b-col>
      <b-col sm="8">
        <b-form-input type="number" min="0" max="500" v-model="gameSize" @input="setSize(gameSize)"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Settings } from "@/models/settings.js";

export default {
  props: {
    settings: Settings
  },
  data() {
    return {
      gameSize: 100,
      color: "#000000"
    };
  },
  methods: {
    setSize: function(size) {
      this.settings.gameWidth = size;
      this.settings.gameHeight = size;
    }
  }
};
</script>