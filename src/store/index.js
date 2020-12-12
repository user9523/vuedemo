
import { createApp } from 'vue'
import { createStore } from 'vuex'
 
 
// 创建 store 容器实例.
const store = createStore({
    state: {
        navName: '',
        catalogue: null
    },
    mutations: {
        // 更新
       update(state,){

       }
      }
    }
})
 
 
const app = createApp({ /* your root component */ })
 
 
// 通过 use 注册插件
app.use(store)