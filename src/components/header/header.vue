<template>
  <div class="header">
    <div class="background">
      <img :src="seller.avatar" style="width:64px;height:64px" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {

      }
    },
    created () {
      console.log(this.seller)
    }
  }
</script>
