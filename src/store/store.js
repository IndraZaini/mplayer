import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
	state: {
    playingsong: {
      id: 0,
      name: "",
      artist: '',
      dir: '',
    },
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
        dir: require('../assets/Songs/test1.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 2,
        name: "Hampa",
        artist: 'Tami Aulia',
        dir: require('../assets/Songs/test.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 3,
        name: "Menunggu Kamu",
        artist: 'Tami Aulia',
        dir: require('../assets/Songs/test2.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 4,
        name: "I Will Always Love You",
        artist: 'Ailee',
        dir: require('../assets/Songs/test3.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 5,
        name: "You Raise Me Up",
        artist: 'So Hyang',
        dir: require('../assets/Songs/test4.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 6,
        name: "The Power Of Love",
        artist: 'So Hyang',
        dir: require('../assets/Songs/test5.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 7,
        name: "Cinta Karena Cinta",
        artist: 'Judika',
        dir: require('../assets/Songs/test6.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 8,
        name: "Pergilah Kasih",
        artist: 'Felix Irwan',
        dir: require('../assets/Songs/test7.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 9,
        name: "Tolong",
        artist: 'Feby putri, Inungs, Radithya',
        dir: require('../assets/Songs/test8.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
      },
      {
        id: 10,
        name: "Berharap Tak Berpisah",
        artist: 'Remember Entertainment',
        dir: require('../assets/Songs/test9.mp3'),
        img: require('../assets/musical-note.png'),
        liked: false,
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
    play(state){
      
    },
    playSong: (state, song) => {
      state.playingsong = Object.assign(song)
    },
    likeSong: (state, id) => {
      state.songs.find(song => song.id == id).liked = !state.songs.find(song => song.id == id).liked
    }
	},
	actions: {
		play(context){
      context.commit('play')
    },
    playSong: (context, song) => {
      context.commit('playSong', song)
    },
    likeSong: (context, id) => {
      context.commit('likeSong', id)
    }
	}
})