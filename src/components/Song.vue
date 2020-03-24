<template>
  <div class="song" @click="playSong(song)">
    <div class="image"><img :src="song.img"></div>
    <div class="name">{{song.name}}</div>
    <div class="artist">{{song.artist}}</div>
  </div>
</template>
<script>
import { bus } from '../index'
export default {
  name: 'Song',
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