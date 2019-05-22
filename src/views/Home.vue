<template>
  <div class="home">
    <h3>Welcome</h3>
    <br>

    <b-row class="justify-content-md-center">
      <b-col col lg="10">
        <b-card-group deck>
          <template v-for="p in players">
            <b-card :title="p.name" :key="p.id" style="max-width: 20rem;">
              <hr />
              <b-card-text>This is a player card</b-card-text>
            </b-card>
          </template>
        </b-card-group>
      </b-col>
    </b-row>

    <br>
    <b-button @click="sendMessage()">Send a message</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Player } from "@/models/player.js";
import { Directions } from "@/models/enums.js";

export default {
  name: "home",
  components: {},
  data() {
    return {
      players: []
    };
  },
  methods: {
    sendMessage: function() {
      this.$socket.send("Hello");
    },

    parseData: async function(message) {
      debugger
      console.log(message);
      let d = JSON.parse(message.data);
      if (d.player && !d.player.id) {
        d.player.id = this.players.length;
        this.players.push(
          new Player(
            d.player.id,
            d.player.name,
            0,
            0,
            Directions.RIGHT,
            d.player.color
          )
        );
        this.$socket.send("Player Registered");
      }
    }
  },
  created() {
    this.$options.sockets.onmessage = data => this.parseData(data);
  }
};
</script>
