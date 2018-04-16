<template>
  <div id="app">
    <!--折线图-->
    <Demo8></Demo8>
    <Demo9></Demo9>

    <!--仪表盘-->
    <Demo10></Demo10>
  </div>
</template>

<script>
import Demo1 from './components/Demo5'
import Demo2 from './components/Demo3'
import Demo3 from './components/Demo2'
import  Demo4 from './components/Demo1'
import Demo5 from './components/Demo4'
import Demo6 from './components/Demo6'
import Demo7 from './components/Demo7'
import Demo8 from './components/Demo8'
import Demo9 from  './components/Demo9'
import Demo10 from  './components/Demo10'
  export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    Demo1,Demo2,Demo3,Demo4,Demo5,Demo6,Demo7,Demo8,Demo9,Demo10
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
  #app{

    background-color:#022D5A ;
    overflow: hidden;
  }
#app div{
  float: left;
}


</style>
