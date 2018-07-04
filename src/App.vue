<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
   <!-- <banner />
    <grid />
    <block />
    <list />-->
    <v-header :seller="seller"></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script type="text/ecmascript-6">
import Banner from './components/Banner'
import Grid from './components/Grid'
import Block from './components/Block'
import List from './components/List'

import Header from './components/header/header';

export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  created() {
//    const url = 'http://localhost:8000/sell/api/seller';
//    const url = '/v2/movie/subject/1764796';
 /*   const url = '/api/book/1220562';

    this.axios.get(url).then((response) => {
      console.log(response)
    })*/

    const url = '/static/data.json';

    this.axios.get(url).then((response) => {
      console.log(response)
      if(response.status === 200) {
        this.seller = Object.assign({}, this.seller, response.data.seller);
      }
      /*response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data);
      }*/
    })


  },
  components: {
    Banner,
    Grid,
    Block,
    List,
    'v-header': Header
  }
}
</script>

<style>
  @import "./common/scss/index.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #f4f4f4;
}
* {
  box-sizing: inherit;

&:before,
&:after {
   box-sizing: inherit;
 }
}
img {
  width: 100%;
  height: auto;
  vertical-align: top;
  content: normal !important;
}
[aspectratio] {
  position: relative;
}
[aspectratio]::before {
  content: '';
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}

[aspectratio-content] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
[flexContainer] {
  display: flex;
  width: 750px;
}
.block {
  margin-top: 15px;
}
ul,li {
  list-style: none outside none;
  margin: 0;
  padding: 0;
}
figure {
  display: block;
  margin: 0;
}
</style>
