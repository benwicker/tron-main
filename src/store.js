import Vue from 'vue'
import Vuex from 'vuex'
import { ServerResponses } from '@/models/enums.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    },
    instance: {
      isHost: false,
      isController: false,
      roomId: ""
    },
    players: []
  },
  mutations: {
    SOCKET_ONOPEN(state, event) {
      console.log("ONOPEN mutation triggered", event)
      Vue.prototype.$socket = event.currentTarget
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE(state, event) {
      console.log("ONCLOSE mutation triggered")
      state.socket.isConnected = false
    },
    SOCKET_ONERROR(state, event) {
      console.log("ONERROR mutation triggered")
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      console.log("ONMESSAGE mutation triggered")
      debugger
      state.socket.message = message
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.log("RECONNECT mutation triggered")
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      console.log("RECONNECT_ERROR mutation triggered")
      state.socket.reconnectError = true;
    },
    UPDATE_SOCKET(state, socket) {
      console.log("Updating Socket")
      state.socket = socket
    },

    UpdateInstance(state, instance) {
      state.instance = instance
    }
  },
  actions: {
    sendMessage: function (context, message) {
      console.log("sendMessage action triggered")
      Vue.prototype.$socket.sendObj(message)
    },

    hostCreated: function ({commit, state}, context) {
      commit('UpdateInstance', {
        isHost: true,
        isController: false,
        roomId: context.hostId
      })
    }
  }
})
