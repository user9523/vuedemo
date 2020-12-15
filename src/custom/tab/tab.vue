<template>
  <aside id="wapper">
      <div id="codename">
         {{ navInfos.navName }}
      </div>
      <ul id="tabs">
          <li class="tab">
             <i class="fas fa-search tab-icon"/>
              <span>快速搜索</span>
          </li>
          <li class="tab tab-save" @click="showSaveConfigAlert">
              <i class="fas fa-share-square tab-icon"></i>
              <span>保存配置</span>
          </li>
          <li class="tab tab-import" @click="showImportConfigAlert">
              <i class="fas fa-cog tab-icon"></i>
              <span>导入配置</span>
          </li>
      </ul>
  </aside>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
    name: "tab",
    setup () {
     const store = useStore() 
     const navInfos = {navName : 'homeURL',catalogue:'catalogue'}
      return {
            navInfos,
          
        }
    }
   
}
</script>

<style scoped>
    #wapper{
      width: 250px;
    height: 100vh;
    float: left;
    background-color: rgb(44, 42, 42);
    }
    #codename{
        text-align: center;
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
    }
    #tabs::-webkit-scrollbar{
    display: none;
    width: 0 !important;
}
    .tab{
    cursor: pointer;
    height: 50px;
    color: rgb(185, 164, 164);
    line-height: 50px;
    position: relative;
    text-align: center;
}
.tab-icon{
   padding-right: 42px;
}
</style>