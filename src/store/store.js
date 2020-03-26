import Vue from 'vue'
import Vuex from 'vuex'
import { bus } from '../index'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
    playingsong: {
      id: 0,
      name: "",
      artist: '',
      dir: '',
    },
    currsong: {
      id: 0,
      name: "",
      artist: '',
      dir: '',
    },
    indexplaying: -1,
    playlistsongs: [
      {
        id: 1,
        name: 'Playlist Chill and Vibing',
      },
      {
        id: 2,
        name: 'Most Played Songs',
      },
      {
        id: 3,
        name: 'New Top Songs Favourite 2019',
      },
      {
        id: 4,
        name: 'Top Love Songs 2019',
      },
      {
        id: 5,
        name: 'Best Playlist',
      },
      {
        id: 6,
        name: 'Playlist Top Rock Songs 2019',
      },
      {
        id: 7,
        name: 'Playlist Top Metallica Songs 2019',
      },
      {
        id: 8,
        name: 'Best Pop Songs 2019',
      },
      {
        id: 9,
        name: 'Playlist Top Songs 2019',
      },
      {
        id: 10,
        name: 'Playlist Top Songs 2019',
      }
    ],
    songs: [
      {
        id: 1,
        name: "Can't Help Falling In Love",
        artist: 'Haley Reinhart',
        dir: require('.././assets/Songs/test1.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '3 : 53',
        liked: true,
      },
      {
        id: 2,
        name: "Hampa",
        artist: 'Tami Aulia',
        dir: require('../assets/Songs/test.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 46',
        liked: true,
      },
      {
        id: 3,
        name: "Menunggu Kamu",
        artist: 'Tami Aulia',
        dir: require('../assets/Songs/test2.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '4 : 15',
        liked: true,
      },
      {
        id: 4,
        name: "I Will Always Love You",
        artist: 'Ailee',
        dir: require('../assets/Songs/test3.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 20',
        liked: true,
      },
      {
        id: 5,
        name: "You Raise Me Up",
        artist: 'So Hyang',
        dir: require('../assets/Songs/test4.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '7 : 41',
        liked: true,
      },
      {
        id: 6,
        name: "The Power Of Love",
        artist: 'So Hyang',
        dir: require('../assets/Songs/test5.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 49',
        liked: true,
      },
      {
        id: 7,
        name: "Cinta Karena Cinta",
        artist: 'Judika',
        dir: require('../assets/Songs/test6.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '4 : 02',
        liked: true,
      },
      {
        id: 8,
        name: "Pergilah Kasih",
        artist: 'Felix Irwan',
        dir: require('../assets/Songs/test7.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '4 : 23',
        liked: true,
      },
      {
        id: 9,
        name: "Tolong",
        artist: 'Feby putri, Inungs, Radithya',
        dir: require('../assets/Songs/test8.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 05',
        liked: true,
      },
      {
        id: 10,
        name: "Berharap Tak Berpisah",
        artist: 'Remember Entertainment',
        dir: require('../assets/Songs/test9.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 36',
        liked: true,
      },
    ],
	},
	getters: {
		
	},
	mutations: {
		changeActive(current){
			this.state.current = current
    },
    addLiked(){
      
    },
    playFromList(state){
      if(state.playingsong.id == 0){
        state.playingsong = Object.assign(state.songs[0])
        state.indexplaying = 0
        bus.$emit('resetSong')
      }
    },
    playSong: (state, song) => {
      state.playingsong = Object.assign(song)
      state.currsong = Object.assign(state.songs.find(song => song == state.playingsong))
      state.indexplaying = state.songs.indexOf(state.currsong)
      bus.$emit('resetSong')
      bus.$emit('playNew')
    },
    likeSong: (state, id) => {
      state.songs.find(song => song.id == id).liked = !state.songs.find(song => song.id == id).liked
    },
    playNext: (state, id) => {
      state.currsong = Object.assign(state.songs.find(song => song.id == id))
      state.indexplaying = state.songs.indexOf(state.currsong)
      if(state.indexplaying != state.songs.length-1){
        state.indexplaying += 1
        state.playingsong = Object.assign(state.songs[state.indexplaying])
        bus.$emit('resetSong')
      }else{
        state.indexplaying = 0
        state.playingsong = Object.assign(state.songs[0]) 
        bus.$emit('resetSong')
        bus.$emit('playNew')
      }
    },
    playPrev: (state, id) => {
      state.currsong = Object.assign(state.songs.find(song => song.id == id))
      state.indexplaying = state.songs.indexOf(state.currsong)
      if(state.indexplaying != 0){
        state.indexplaying -= 1
        state.playingsong = Object.assign(state.songs[state.indexplaying--])
      }
    }
	},
	actions: {
		playFromList(context){
      context.commit('playFromList')
    },
    playSong: (context, song) => {
      context.commit('playSong', song)
    },
    likeSong: (context, id) => {
      context.commit('likeSong', id)
    },
    playNext: (context, id) => {
      context.commit('playNext', id)
    },
    playPrev: (context, id) => {
      context.commit('playPrev', id)
    }
	}
})