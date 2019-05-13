<template>
  <div>
    <b-button v-b-modal.settings-modal>Settings</b-button>

    <b-modal id="settings-modal" centered title="Settings">
      <b-tabs content-class="mt-3">
        <b-tab title="Game Settings" active>
          <game-settings :settings="settings"></game-settings>
        </b-tab>
        <b-tab title="Player Settings">Player Settings Are Here</b-tab>
      </b-tabs>
    </b-modal>
  </div>
</template>

<script>
import { Settings } from "@/models/settings.js";
import GameSettings from "@/components/GameSettings.vue"

export default {
  components: {
    GameSettings
  },
  props: {
    settings: Settings
  }
};
</script>