<template>
   <div class='inputhook'>
       <input class="inputstyle" placeholder="请输入搜素内容" type="text">
   </div>
</template>

<script>

export default {
components: {

},
setup() {
   return {

     }
   }
}
</script>
<style  scoped>
    .inputhook{
        margin: 0;
        position: relative;
        height: 50px;
        width: 400px;
        display: inline-block;
    }
    .inputstyle{
        width: 100%;
        height: 100%;
        padding-left: 20px;
    }
</style>