<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0"></div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'cartcontrol',
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {

      }
    },
    computed: {

    },
    created() {
      console.log(this.food)
    },
    methods: {
      addCart() {

      }
    }
  }
</script>

<style lang="scss">
  @import "./cartcontrol.scss";
</style>
