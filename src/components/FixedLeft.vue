<template>
  <div class="fixedleft">
    <div class="logos"><router-link to="/"><div class="logo"><img src="../assets/play-button.png"></div>MPlayer</router-link></div>
    <ul>
      <li><router-link :class="{'active' : 'Home' == current || '/' == current}" to="/home"><div class="logo"><img src="../assets/home.png"></div>Home</router-link></li>
      <li><router-link :class="{'active' : 'Search' == current}" to="/search"><div class="logo"><img src="../assets/search.png"></div>Search</router-link></li>
      <li><router-link :class="{'active' : current == 'YourLibrary'}" to="/yourlibrary"><div class="logo"><img src="../assets/list-text.png"></div>Your Library</router-link></li>
    </ul>
    <div class="playlists">
      <div class="title">playlists</div>
      <play-list></play-list>
    </div>
    <div class="line"></div>
    <div class="playlistsongs">
      <play-list-song></play-list-song>
    </div>
  </div>
</template>
<script>
import PlayList from './Playlist.vue'
import PlayListSong from './PlaylistSong'
export default {
  name: 'FixedLeft',
  components: {
    PlayList,
    PlayListSong,
  },
  computed: {
    current() {
      return this.$route.name
    }
  }
}
</script>