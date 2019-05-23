<template>
  <div class="home">
    <h3>Welcome</h3>

    <b-row class="justify-content-md-center">
      <b-col md="2">
        <b-input-group>
          <b-form-input v-model="instance.roomId" class="text-center font-weight-bold"></b-form-input>
          <b-input-group-append>
            <b-button @click="createPlayer()">Player</b-button>
          </b-input-group-append>
        </b-input-group>
        <br>
      </b-col>
    </b-row>

    <b-button @click="createHost()">Host</b-button>

  </div>
</template>

<script>
// @ is an alias to /src
import { Player } from "@/models/player.js";
import { Directions, ServerCommands } from "@/models/enums.js";
import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  components: {},
  data() {
    return {
      players: []
    };
  },
  methods: {
    ...mapActions(["sendMessage"]),

    createHost: function() {
      let message = { cmd: ServerCommands.CREATE_HOST };
      this.sendMessage(message);
      this.$router.push("lobby");
    },

    createPlayer: function() {
      let message = {
        cmd: ServerCommands.CREATE_PLAYER,
        roomId: this.instance.roomId
      };
      this.sendMessage(message);
    },

    parseData: async function(message) {
      console.log(message);
      let d = message.data;
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
  computed: {
    ...mapState({
      instance: state => state.instance
    })
  },
  created() {
    this.$options.sockets.onmessage = data => this.parseData(data);
  }
};
</script>
