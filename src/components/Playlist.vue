<template>
  <div class="playlist">
    <a @click="CreatePlaylist()"><div class="logo"><img :src="this.addplaylists.img"></div>{{this.addplaylists.name}}</a>
    <router-link :class="{'isactive' : this.$route.name == 'Liked'}" to="/liked"><div class="logo liked" ><img :src="this.liked.img"></div>{{this.liked.name}}</router-link>
  </div>
</template>
<script>
export default {
  name: 'PlayList',
  data(){
    return{
      addplaylists:{
        name: 'Create Playlist',
        img: require('../assets/add.png'),
      },
      liked: {
        name: 'Liked Songs',
        img: require('../assets/heart.png'),
      }
    }
  },
  methods: {
    CreatePlaylist(){
      this.$store.state.isOpen = true
    }
  }
}
</script>