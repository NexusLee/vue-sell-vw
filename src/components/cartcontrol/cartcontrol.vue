<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0"
                    @click="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
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
    },
    methods: {
      addCart(event) {
        if(!event._constructed){
          return;
        }
        if(!this.food.count){
          Vue.set(this.food, 'count', 1);
        }else{
          this.food.count++;
        }
        this.$emit('add', event.target);
      },
      decreaseCart(event) {
        if(!event._constructed){
          return;
        }
        if(this.food.count){
          this.food.count--;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./cartcontrol.scss";
</style>
