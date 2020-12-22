<template>
 <div id="content-container">
   <div id="notice">
        <i class="fas fa-bell"></i>
        <top/>
        <!-- <search></search> -->
    </div>
 </div>
</template>

<script>
// import Top  from './components/carousel'
export default {
  // components:{
  //   Top
  // },
  setup() {
    return {
    }
  }
}
</script>
<style scoped>
#content-container{
  display: block;
  margin-left: 250px;
  height: 100vh;
  background-color: rgb(249, 249, 249);
}
#notice{
    background-color: white;
    height: 80px;
    box-shadow: 1px 1px 5px #eee;
    line-height: 80px;
    position: relative;
}
.fa-bell{
    color: rgb(240, 179, 12);
    margin-left: 20px;
}
</style>
