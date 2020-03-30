<template>
  <div @click="playSong(song)" class="songplaylist">
    <div style="display: flex">
      <div class="img"></div>
      <div> 
        <div class="name">{{song.name}}</div>
        <div class="artist">{{song.artist}}</div>
      </div>
    </div>
    <div style="display: flex">
      <div class="menu"></div>
      <div class="duration">{{song.dur}}</div>
    </div>
  </div>
</template>
<script>
import {bus} from '../index'
export default {
  name: 'SongPlaylist',
  props: {
    song: {
      required: true,
    }
  },
  methods: {
    playSong(song) {
      this.$store.dispatch('playSong',song)
      bus.$emit('resetSong')
    }
  }
}
</script>