<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" style="width:64px;height:64px" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}} 分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulltin-wrapper"></div>

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

<style lang="scss">
  @import "./header.scss";
</style>
