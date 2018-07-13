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
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul v-for="food in item.foods" class="food-item">
            <div class="icon">
              <img :src="food.icon" style="width: 57px;height: 57px;" />
            </div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">¥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
              </div>
            </div>
          </ul>
        </li>
      </ul>
    </div>
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
