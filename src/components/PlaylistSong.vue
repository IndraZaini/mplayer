<template>
  <div class="playlistsong">
    <div v-for="playlist in playlist" :key="playlist.id">
      <router-link :to="{ name: 'Playlists', params: { playlistId: playlist.id }}">{{playlist.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PlaylistSongs',
  data(){
    return{
    }
  },
  computed: {
    playlist(){
      return this.$store.state.playlists.filter(playlist => playlist.id != 0)
    },
  }
}
</script>