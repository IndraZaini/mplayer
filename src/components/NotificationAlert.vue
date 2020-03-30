<template>
  <div class="notificationalert">
    <transition name="fade">
      <div v-if="msg != ''" class="message">{{msg}}</div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'NotificationAlert',
  props: {
    message:{
      required: true,
    }
  },
  computed: {
    msg(){ 
      return this.message
    }
  },
}
</script>