<template>
  <div class="tron">
    <game-settings :settings="settings"></game-settings>
    <br />
    <tron-canvas :settings="settings"></tron-canvas>
  </div>
</template>

<script>
import TronCanvas from "@/components/TronCanvas.vue";
import GameSettings from "@/components/GameSettings.vue";
import { Settings } from "@/models/settings.js";


export default {
  components: {
    TronCanvas,
    GameSettings
  },
  data() {
    return {
      settings: new Settings(100, 100, 3, "rgba(22, 124, 124, 0.19)")
    }
  },
};
</script>
