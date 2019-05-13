<template>
  <div class="tron">
    <!-- <settings-panel :settings="settings"></settings-panel> -->
    <br />
    <tron-canvas :settings="settings"></tron-canvas>
  </div>
</template>

<script>
import TronCanvas from "@/components/TronCanvas.vue";
import SettingsPanel from "@/views/SettingsPanel.vue";
import { Settings } from "@/models/settings.js";


export default {
  components: {
    TronCanvas,
    SettingsPanel
  },
  data() {
    return {
      settings: new Settings(100, 100, 3, "rgba(22, 124, 124, 0.19)")
    }
  },
};
</script>
