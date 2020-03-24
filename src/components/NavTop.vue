<template>
  <div class="navtop">
    <div class="back" @click="goBack"></div>
    <div class="next" @click="goNext"></div>
    <input v-if="current == 'Search'" class="search" placeholder="Search for Artists, Songs, or Podcasts"> 
    <div v-if="current.includes('YourLib')" class="library">
      <ul>
        <li><router-link :class="{'active':current.includes('Playlists')}" to="/playlists">Playlists</router-link></li>
        <li><router-link :class="{'active':current.includes('Podcasts')}" to="/podcasts">Podcasts</router-link></li>
        <li><router-link :class="{'active':current.includes('Artists')}" to="/artists">Artists</router-link></li>
        <li><router-link :class="{'active':current.includes('Albums')}" to="/albums">Albums</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
import router from '../router'
export default {
  name: 'NavTop',
  data(){
    return{

    }
  },
  computed: {
    current() {
      return this.$route.name
    }
  },
  methods: {
    goBack () {
      router.go(-1)
    },
    goNext () {
      router.go(1)
    }
  }
}

</script>