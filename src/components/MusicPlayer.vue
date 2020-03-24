<template>
  <div class="musicplayer">
    <div class="songcontainer">
      <div v-if="song.id != 0" class="img"><img :src="song.img"></div>
      <div class="desc">
        <div class="title">{{song.name}}</div>
        <div class="artist">{{song.artist}}</div>
      </div>
      <div v-if="song.id != 0" class="like" :class="{'green' : song.liked}" @click="addLiked()"></div>
    </div>
    <div class="controllercontainer">
      <div class="control">
        <div class="icon shuffle"></div>
        <div class="icon prev"></div>
        <div v-if="playing == false" class="icon play" @click="play(song)"></div>
        <div v-else class="icon pause" @click="play(song)"></div>
        <div class="icon next"></div>
        <div class="icon loop"></div>
      </div> 
      <div class="songbar">
        <div class="duration">{{ currentMin }}:{{ currentSec }}</div>
        <input type="range" step="0.25" min="0" :max="maxdur" v-model="changecurrenttime">
        <div class="duration">{{ maxMin }}:{{ maxSec }}</div>
      </div>
    </div>
    <div class="volumecontainer">
      <div v-if="song.id != 0" class="songque"></div>
      <div v-if="song.id != 0" class="volume"></div>
      <input v-if="song.id != 0" type="range" min="0" max="1" step="0.025" v-model="vol">
    </div>
  </div>
</template>
<script>
import { bus } from '../index'
export default {
  name: 'MusicPlayer',
  data(){
    return{
      playing: false,
      currentdur: 0,
      audio: new Audio(),
      maxdur: 0,  
      vol: 1,
    }
  },
  mounted() {
    bus.$on('resetSong', () => {
      this.audio.pause()
      this.playing = false
      this.audio.src = ''
      this.audio = new Audio(window.URL.createObjectURL(this.song.dir))
      this.audio.volume = this.vol,
      this.audio.onloadedmetadata = () => {
        this.maxdur = this.audio.duration
        this.currentdur = this.audio.currentTime
      }
      this.audio.ontimeupdate = () => {
        this.currentdur = this.audio.currentTime
      }
    })  
  },
  watch: {
    vol:function(newValue){
      this.audio.volume = newValue
    }
  },
  computed: {
    audioSource () {
      return this.songs
    },
    currentMin () {
      return (this.currentdur / 60).toFixed()
    },
    maxMin () {
      return (this.maxdur / 60).toFixed()
    },
    currentSec () {
      if((this.currentdur % 60).toFixed()>9)
        return (this.currentdur % 60).toFixed()
      else
        return ('0'+(this.currentdur % 60).toFixed())
    }, 
    maxSec () {
      if((this.maxdur % 60).toFixed()>9)
        return (this.maxdur % 60).toFixed()
      else
        return ('0'+(this.maxdur % 60).toFixed())
    }, 
    changecurrenttime: {
      get : function() {
        return this.currentdur
      },
      set : function(value) {
        this.audio.currentTime = value
      }
    },
    song: {
      get : function() {return this.$store.state.playingsong},
    }
  },
  methods: {
    addLiked(){
      this.$store.dispatch('likeSong', this.song.id)  
    },
    play(song){
      this.playing ? this.audio.pause() : this.audio.play()
      this.playing = !this.playing
    },
  }
}
</script>