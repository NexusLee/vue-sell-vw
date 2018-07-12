<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  const ERR_OK = 200;
  export default {
    name: 'goods',
    props: {
      sellere: {
        type: Object
      }
    },
    data () {
      return {
        goods: []
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      const url = '/static/data.json';

      this.axios.get(url).then((response) => {
        if(response.status === ERR_OK) {
          this.goods = Object.assign({}, this.goods, response.data.goods);
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./goods.scss";

</style>
