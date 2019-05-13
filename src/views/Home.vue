<template>
  <div class="home">
    <h3>Welcome</h3>
    <b-button @click="sendMessage()">Send a message</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Player } from "@/models/player.js";
import { Directions } from "@/models/enums.js";

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      players: []
    }
  },
  methods: {
    sendMessage: function() {
      this.$socket.send("Hello");
    },

    parseData: async function (message) {
      console.log(message);
      let d = message.data;
      if (d.player && !d.player.id) {
        d.player.id = this.players.length;
        this.players.push(new Player(d.player.id, 0, 0, Directions.RIGHT, d.player.color));
        this.$socket.send("Player Registered");
      }
    }
  },
  created() {
    this.$options.sockets.onmessage = (data) => this.parseData(data);
  },
}
</script>
