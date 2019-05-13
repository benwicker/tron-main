<template>
  <div class="home">
    <h3>Welcome</h3>
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
  created() {
    this.$options.sockets.onmessage = (data) => console.log(data);
  },
}
</script>
