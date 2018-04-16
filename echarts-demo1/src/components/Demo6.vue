<template>
  <div id="test" :style="{width:'500px',height:'500px'}">

  </div>
</template>

<script>
    export default {
        name: "test",
      data(){
          return{
            msg:""
          }
      },
      mounted(){
          this.drop()
      },
      methods:{
          drop(){
            let myChart=this.$echarts.init(document.getElementById('test'));
             var _this=this
            this.$http.get('src/data/tsconfig.json').then(function(res){
                myChart.setOption({
                  series:[{
                    type:'bar',
                    name:'h2',
                    data:res.data.data
                  },{
                    type:'bar',
                    name:'h1',
                    data:res.data.data
                  }]
                })
            });
            myChart.setOption({
              title:{
                text:'Hello Vue',
                textStyle:{
                  color:'green'
                }
              },
              xAxis:{
                data:['A','B','C','D']
              },
              yAxis:{
              },
            })



          }
      }
    }
</script>

<style scoped>

</style>
