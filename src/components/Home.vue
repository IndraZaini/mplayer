<template>
  <div class="home-page">
    <div class="container">
      <div class="headertitle">Songs</div>
      <div style="display: grid;grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));"> 
        <song v-for="song in songs" :key="song.id" :song="song"></song>
      </div>
    </div>
  </div>
</template>
<script>
import Song from './Song.vue'
export default {
  name: 'Home',
  components: {
    Song,
  },
  data(){
    return{
      current: 'Home',
      songs: this.$store.state.songs
    }
  },
  methods: {
  }

}
</script>