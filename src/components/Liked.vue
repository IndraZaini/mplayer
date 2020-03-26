<template>
  <div class="liked-page">
    <div class="container">
      <div class="left">
        <div class="img"><img src="../assets/heart.png">
          <div class="hoverplay">
            <div v-if="playing == false" class="play" @click="play()"></div>
            <div v-else class="pause" @click="play()"></div>
          </div>
        </div>
        <div class="title">Liked Songs</div>
        <div v-if="playing == false" class="button" @click="play()">Play</div>
        <div v-else class="button" @click="play()">Pause</div>
        <div class="totalsong"></div>
      </div>
      <div class="right">
        <playlist-song v-for="song in songs" :key="song.id" :song="song"></playlist-song>
      </div>
    </div>
  </div>
</template>
<script>
import { bus } from '../index'
import PlaylistSong from './SongPlaylist.vue'
export default {
  name: 'Liked',
  components: {
    PlaylistSong,
  },
  mounted(){
    bus.$on('play', () => {
      this.playing = !this.playing
    })
  },
  data(){
    return{
      playing: false,
    }
  },
  computed: {
    songs(){
      return this.$store.state.songs.filter(song => song.liked == true)
    }
  },
  methods: {
    play(){
      bus.$emit('playFromList')
      
    },
  }
}
</script>