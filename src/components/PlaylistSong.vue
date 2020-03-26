<template>
  <div class="playlistsong">
    <div v-for="playlist in playlist" :key="playlist.id">
      <router-link to="/">{{playlist.name}}</router-link>
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