<template>
  <div class="home">
    <h3>Welcome</h3>
    <b-button @click="createPlayer()">Player</b-button> | 
    <b-button @click="createHost()">Host</b-button>
    <!-- <b-row class="justify-content-md-center">
      <b-col col lg="10">
        <b-card-group deck class="justify-content-center">
          <template v-for="p in players">
            <b-card :title="p.name" :key="p.id" style="max-width: 20rem;">
              <hr />
              <p class="text-left"><b>Id: </b>{{p.id}}</p>
              <p class="text-left"><b>Color: </b>{{p.color}}</p>
              <p class="text-left"><b>Start X: </b>{{p.startX}}</p>
              <p class="text-left"><b>Start Y: </b>{{p.startY}}</p>
              <p class="text-left"><b>Start Direction: </b>{{p.startDirection}}</p>
            </b-card>
          </template>
        </b-card-group>
      </b-col>
    </b-row>-->
  </div>
</template>

<script>
// @ is an alias to /src
import { Player } from "@/models/player.js";
import { Directions, ServerCommands } from "@/models/enums.js";
import { mapActions } from 'vuex';


export default {
  name: "home",
  components: {},
  data() {
    return {
      players: []
    };
  },
  methods: {
    ...mapActions([
      'sendMessage'
    ]),

    createHost: function() {
      this.sendMessage(ServerCommands.CREATE_HOST);
    },

    createPlayer: function() {
      this.sendMessage(ServerCommands.CREATE_PLAYER);
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
  created() {
    this.$options.sockets.onmessage = data => this.parseData(data);
  }
};
</script>
