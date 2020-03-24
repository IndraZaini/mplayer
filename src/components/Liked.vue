<template>
  <div class="liked-page">
    <div class="container">
      <div class="left">
        <div class="img"><img src="../assets/heart.png">
          <div class="hoverplay">
            <div v-if="playing == false" class="play"></div>
            <div v-else class="pause"></div>
          </div>
        </div>
        <div class="title">Liked Songs</div>
        <div class="buttonplay">Play</div>
        <div class="totalsong"></div>
      </div>
      <div class="right">
        <div class="img"><img src=""></div>
        <div class="name"></div>
        <div class="artist"></div>
        <div class="menu"></div>
        <div class="duration"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Liked',
  data(){
    return{
      playing: false,
    }
  }
}
</script>