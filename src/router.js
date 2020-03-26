import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Search from './components/Search.vue'
import YourLibrary from './components/YourLibrary.vue'
import Playlists from './components/Playlists.vue'
import Podcasts from './components/Podcasts.vue'
import Artists from './components/Artists.vue'
import Albums from './components/Albums.vue'
import Liked from './components/Liked.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/mplayer/',
  routes:[
    {
      path: '',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/liked',
      name: 'Liked',
      component: Liked,
    },
    {
      path: '/yourlibrary',
      component: YourLibrary,
      children: [
        {
          path: '',
          redirect: {
            name: 'YourLibPlaylists'
          }
        },
        {
          path: '/playlists',
          name: 'YourLibPlaylists',
          component: Playlists,
        },
        {
          path: '/podcasts',
          name: 'YourLibPodcasts',
          component: Podcasts,
        },
        {
          path: '/artists',
          name: 'YourLibArtists',
          component: Artists,
        },
        {
          path: '/albums',
          name: 'YourLibAlbums',
          component: Albums,
        }
      ]
    }
  ]
})