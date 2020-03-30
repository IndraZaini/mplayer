import Vue from 'vue'
import Vuex from 'vuex'
import { bus } from '../index'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
    indexplaying: -1,
    isOpen: false,
    idForPlaylist: 1,
    playlists: [
      {
        id: 0,
        name: 'Liked',
        songs: [
          2, 1, 6, 3
        ]
      },
      {
        id: 1,
        name: 'Accoustic Songs Cover',
        songs: [
          2, 3, 8
        ]
      },
      {
        id: 2,
        name: 'Indonesian Songs',
        songs: [
          2, 3, 7, 8, 9, 10
        ]
      },
    ],
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
    songs: [
      {
        id: 1,
        name: "Can't Help Falling In Love",
        artist: 'Haley Reinhart',
        dir: require('../assets/Songs/test1.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '3 : 53',
      },
      {
        id: 2,
        name: "Hampa",
        artist: 'Tami Aulia',
        dir: require('../assets/Songs/test.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 46',
      },
      {
        id: 3,
        name: "Menunggu Kamu",
        artist: 'Tami Aulia',
        dir: require('../assets/Songs/test2.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '4 : 15',
      },
      {
        id: 4,
        name: "I Will Always Love You",
        artist: 'Ailee',
        dir: require('../assets/Songs/test3.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 20',
      },
      {
        id: 5,
        name: "You Raise Me Up",
        artist: 'So Hyang',
        dir: require('../assets/Songs/test4.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '7 : 41',
      },
      {
        id: 6,
        name: "The Power Of Love",
        artist: 'So Hyang',
        dir: require('../assets/Songs/test5.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 49',
      },
      {
        id: 7,
        name: "Cinta Karena Cinta",
        artist: 'Judika',
        dir: require('../assets/Songs/test6.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '4 : 02',
      },
      {
        id: 8,
        name: "Pergilah Kasih",
        artist: 'Felix Irwan',
        dir: require('../assets/Songs/test7.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '4 : 23',
      },
      {
        id: 9,
        name: "Tolong",
        artist: 'Feby putri, Inungs, Radithya',
        dir: require('../assets/Songs/test8.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 05',
      },
      {
        id: 10,
        name: "Berharap Tak Berpisah",
        artist: 'Remember Entertainment',
        dir: require('../assets/Songs/test9.mp3'),
        img: require('../assets/musical-note.png'),
        dur: '5 : 36',
      },
    ],
	},
	getters: {
		
	},
	mutations: {
		changeActive(current){
			this.state.current = current
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
      if(state.playlists[0].songs.find(song => song == id) != undefined){
        state.playlists[0].songs.splice(state.playlists[0].songs.indexOf(id), 1)
        bus.$emit('showNotification', 'Removed from your Liked Songs')
      }else{
        state.playlists[0].songs.push(id)
        bus.$emit('showNotification', 'Added to your Liked Songs')
      }
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