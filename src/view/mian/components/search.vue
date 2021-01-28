<template>
    <div :class="[
            'inputbox', 
            'animate__animated', 
            {'animate__bounceInDown': moduleSearch.isSearch}, 
            {'animate__fadeOutUpBig': !moduleSearch.isSearch}]"
        >
       <lp-input class="search-input" 
                  placeholder="输入搜索关键词"
                  :value="moduleSearch.searchWord"
                  @_input="input"/>
        <div class="close-search">
            <span class="close-search-txt" @click="offclick">关闭</span>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {reactive} from 'vue'
import lpinput from '../../../components/lpsearch.vue'
export default {
    components: {
        lpinput
    },
        setup() {
          const store = useStore()
          const  moduleSearch = store.state.moduleSearch
          // 
          function input(){
             store.commit('changeSearchWord', value)
          }
        // 关闭
        function offclick() {
            store.commit('changeIsSearch', false)
            store.commit('changeSearchWord', '')
        }
          return{
              store,
              moduleSearch,
              offclick,
              input
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
    box-sizing: border-box;
}
.input{
    margin: 0;
    border: 0;
    width: 100px;
    display: inline-block;
   height: 50px;
    width: 50px;
    position: relative;
    text-align: center;
    line-height: 50px;
    color: rgb(194, 184, 184);
    background: rgb(6, 199, 233);
    border-radius: 0px 25px 25px 0px;
}
.search-input{
    margin: 0;
    width: 300px;
    display: inline-block;
}
.close-search{
    display: inline-block;
    height: 50px;
    width: 50px;
    text-align: right;
    line-height: 50px;
    color: rgb(194, 184, 184);
}
.close-search-txt{
    cursor: pointer;
}
</style>