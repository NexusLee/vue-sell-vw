<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block positive" :class="{'active': selectType===2}">{{desc.all}}<span class="count">47</span></span>
      <span class="block positive" :class="{'active': selectType===0}">{{desc.positive}}<span class="count">10</span></span>
      <span class="block negative" :class="{'active': selectType===1}">{{desc.negative}}<span class="count">7</span></span>
    </div>
    <div class="switch">
      <span class="icon-check_cicle"></span>
      <span class="text">只看内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;

  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: ' 不满意'
          }
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "ratingselect.scss";
</style>
