<template>
  <div class="home">
    <h3>Welcome</h3>
    <b-button @click="sendMessage()">Send a message</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    sendMessage: function() {
      this.$socket.send("Hello");
    }
  },
  created() {
    this.$options.sockets.onmessage = (data) => console.log(data);
  },
}
</script>
