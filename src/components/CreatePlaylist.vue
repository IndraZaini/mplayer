<template>
  <div class="createplaylist">
    <div class="close" @click="close()"></div>
    <div class="title">Create new playlist</div>
    <div class="input">
      <div class="label">Playlist Name</div>
      <input type="text" placeholder="New Playlist" v-model="playlistName" ref="name">
    </div>
    <div class="btncontainer">
      <div class="button cancel" @click="close()">Cancel</div>
      <div class="button create" @click="createNew()">Create</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreatePlaylist',
  data(){
    return{
      idForPlaylist: 3,
      playlistName: '',
      newPlaylist:{
        id: 0,
        name: '',
        songs: []
      }
    }
  },
  mounted(){
    this.focusInput()
  },
  methods: {
    close(){
      this.$store.state.isOpen = false
    },
    createNew(){
      this.newPlaylist.id = this.idForPlaylist
      this.newPlaylist.name = this.playlistName
      this.$store.state.playlists.push(this.newPlaylist)
      this.idForPlaylist = this.idForPlaylist + 1
      this.$store.state.isOpen = false
    },
    focusInput(){
      this.$refs.name.focus()
    }
  }
}
</script>