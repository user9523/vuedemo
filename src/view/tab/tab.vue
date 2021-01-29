<template>
  <aside id="wapper">
      <div id="codename">
         <img class="imgclass" src="../../assets/img/logo.jpg" alt="logo">
         <span style="margin-left:20px"> {{ navInfos.navName }}</span>
      </div>
      <ul id="tabs">
          <li class="tab" @click="ShowSearch">
            <span class="li-container">
             <i class="fas fa-search tab-icon"/>
              <span>快速搜索</span>
            </span>
          </li>
          <li class="tab tab-save" @click="showSaveConfigAlert">
            <span class="li-container">
              <i class="fas fa-share-square tab-icon"></i>
              <span>保存配置</span>
            </span>
          </li>
          <li class="tab tab-import" @click="showImportConfigAlert">
            <span class="li-container">
              <i class="fas fa-cog tab-icon"></i>
              <span>导入配置</span>
            </span>
          </li>
          <br>
          <li class="tab" v-for="(item,index) in navInfos.catalogue" :key="index" @click="toID(item.id)">
             <span class="li-container">
                <i :class="['fas', `fa-${item.icon}`, 'tab-icon']" />
                <span>{{ item.name }}</span>
                <i class="fas fa-angle-right tab-icon tab-angle-right"/>
              </span>
          </li>
          <li class="tab" @click="addTabShow()">
              <i class="fas fa-plus"></i>
          </li>
      </ul>
       <!--    添加标签弹框     -->
      <tabAlert name="新增标签"/>
  </aside>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import tabAlert from '../../components/tabAlert/tabAlert.vue'

export default {
    name: "tab",
    components: {
        tabAlert
        // saveConfig,
        // importConfig
    },
    setup () {
     let store = useStore() 
     let  navInfos = store.state // Vuex的state对象
     console.log('接收的对象')
     console.log(navInfos)
     // 展示"添加标签弹框"
        function addTabShow() {
            store.commit('changeTabInfo', [
                {key: 'isShowAddTabAlert', value: true},
                {key: 'alertType', value: '新增标签'}
            ])
        }
     // 展开搜索框
     function ShowSearch(){
         if(store.state.moduleSearch.isSearch){
             store.commit('changesearchWord',false)
             store.commit('changesearchWord', '')
         } else {
             store.commit('changeIsSearch',true)
         }
     }
     // 跳转到指定标签
      function toID(id) {
        debugger
          const content = document.getElementById('content')
          const el = document.getElementById(`${id}`)
          let start = content.scrollTop
          let end = el.offsetTop - 80
          let each = start > end ? -1 * Math.abs(start - end) / 20 : Math.abs(start - end) / 20
          let count = 0
          let timer = setInterval(() => {
              if(count < 20) {
                  content.scrollTop += each
                  count ++
              } else {
                  clearInterval(timer)
              }
          }, 10) 
      }
      return { 
            navInfos,
            ShowSearch,
            toID,
            addTabShow
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
        background: rgb(76, 154, 243);
        display: flex;
        justify-content: center;
        align-items: center;
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
.li-container{
    display: inline-block;
    width: 100%;
}
.tab-angle-right{
     position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 0;
}
.imgclass{
    width: 80px;
    height: 80px;
}
</style>