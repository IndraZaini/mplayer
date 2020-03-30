<template>
  <div style="padding: 25px 35px">
    <playlist-page></playlist-page>
    <podcast-page></podcast-page>
    <artist-page></artist-page>
    <album-page></album-page>
  </div>
</template>
<script>
import PlaylistPage from './Playlists'
import PodcastPage from './Podcasts'
import ArtistPage from './Artists'
import AlbumPage from './Albums'
export default {
  name: 'YourLibrary',
  components: {
    PlaylistPage,
    PodcastPage,
    ArtistPage,
    AlbumPage,
  }
}
</script>