<template>
  <div>
    <b-button v-b-modal.settings-modal>Settings</b-button>

    <b-modal id="settings-modal" centered title="Game Settings">
      <b-row>
        <b-col sm="4">Game Speed: {{settings.gameSpeed}}</b-col>
        <b-col sm="8">
          <b-form-input type="range" min="0" max="50" v-model="settings.gameSpeed"></b-form-input>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { Settings } from "@/models/settings.js";

export default {
  props: {
    settings: Settings
  }
};
</script>
