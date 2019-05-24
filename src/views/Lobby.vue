<template>
  <div>
    <h3>Room Id: <b>{{instance.roomId}}</b></h3>
    <hr />

    <h5 v-if="!players.length">...Waiting on players...</h5>
    <b-row class="justify-content-md-center">
      <b-col col lg="10">
        <b-card-group deck class="justify-content-center">
          <template v-for="p in players">
            <b-card :title="p.name" :key="p.id" style="max-width: 20rem;">
              <hr>
              <p class="text-left">
                <b>Id:</b>
                {{p.id}}
              </p>
              <p class="text-left">
                <b>Color:</b>
                {{p.color}}
              </p>
              <p class="text-left">
                <b>Start X:</b>
                {{p.startX}}
              </p>
              <p class="text-left">
                <b>Start Y:</b>
                {{p.startY}}
              </p>
              <p class="text-left">
                <b>Start Direction:</b>
                {{p.startDirection}}
              </p>
              <p class="text-left">
                <b>Current Direction:</b>
                {{p.currentDirection}}
              </p>
            </b-card>
          </template>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      players: state => state.players,
      instance: state => state.instance
    })
  }
};
</script>