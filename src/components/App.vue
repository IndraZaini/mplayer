<template>
  <div>
    <fixed-left></fixed-left>
    <music-player></music-player>
    <nav-top></nav-top>
    <create-playlist v-if="this.Open"></create-playlist>
    <notification-alert :message="this.message"></notification-alert>
    <router-view style="margin:0 0 90px 230px;width: calc(100vw - 230px); height: calc(100vh - 90px);padding-top:60px;"></router-view>
  </div>
</template>
<script>
import { bus } from '../index'
import Home from './Home'
import FixedLeft from './FixedLeft'
import MusicPlayer from './MusicPlayer'
import NavTop from './NavTop'
import CreatePlaylist from './CreatePlaylist'
import NotificationAlert from './NotificationAlert'
export default {
  name: 'App',
  components: {
    Home,
    FixedLeft,
    MusicPlayer,
    NavTop,
    CreatePlaylist,
    NotificationAlert,
  },
  data(){
    return{
      message: '',
      timeout: 0,
    }
  },
  mounted() {
    bus.$on('showNotification', (message) => {
      this.changeMessage(message)
      this.timeout = setTimeout(() => {
        this.message= ''
      }, 3000)
    })
  },
  computed: {
    Open(){
      return this.$store.state.isOpen
    }
  },
  methods: {
    changeMessage(message){
      this.message = message
      clearTimeout(this.timeout);
    }
  }
}
</script>