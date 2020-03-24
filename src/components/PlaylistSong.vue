<template>
  <div class="playlistsong">
    <div v-for="song in playlist" :key="song.id">
      <router-link to="/">{{song.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PlaylistSongs',
  data(){
    return{
      playlist: this.$store.state.playlistsongs,
    }
  }
}
</script>