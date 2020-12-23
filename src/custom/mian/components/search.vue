<template>
    <div :class="[
            'inputbox', 
            'animate__animated', 
            {'animate__bounceInDown': moduleSearch.isSearch}, 
            {'animate__fadeOutUpBig': !moduleSearch.isSearch}]"
        >
        <lpinput></lpinput>
        <div class="input" @click="offclick()">关闭</div>
    </div>
</template>

<script>
import lpinput from '../../../components/lpsearch.vue'
export default {
    components: {
        lpinput
    },
        setup() {
          const  moduleSearch = {
              isSearch : true
          }
          return{
              moduleSearch
        }
    }
}
</script>
<style  scoped>
.inputbox{
    position: absolute;
    bottom: -65px;
    left: 50%;
    /* width: 350px; */
    height: 50px;
    line-height: 0;
    transform: translate(-50%, 0);
    z-index: 998;
}
.input{
    margin: 0;
    width: 100px;
    display: inline-block;
   height: 50px;
    width: 50px;
    position: relative;
    text-align: center;
    line-height: 50px;
    color: rgb(194, 184, 184);
    background: rgb(6, 199, 233);
}
</style>