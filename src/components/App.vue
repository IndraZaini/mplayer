<template>
  <div>
    <fixed-left></fixed-left>
    <music-player></music-player>
    <nav-top></nav-top>
    <router-view style="margin:0 0 90px 230px;width: calc(100vw - 230px); height: calc(100vh - 90px);padding-top:60px;"></router-view>
  </div>
</template>
<script>
import Home from './Home'
import FixedLeft from './FixedLeft'
import MusicPlayer from './MusicPlayer'
import NavTop from './NavTop'
export default {
  name: 'App',
  components: {
    Home,
    FixedLeft,
    MusicPlayer,
    NavTop,
  }
}
</script>