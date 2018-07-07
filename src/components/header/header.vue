<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" style="width:64px;height:64px" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand ignore"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}} 分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
      <span></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" style="width:100%;height:100%;" />
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
        classMap: []
      }
    },
    created () {
      console.log(this.seller)
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  }
</script>

<style lang="scss">
  /*@import "../../common/scss/mixin.scss";*/
  @import "./header.scss";
</style>
