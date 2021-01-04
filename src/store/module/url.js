// 存储用户的添加URL情况
const moduleUrl = {
    state: {
        url: '', // URL地址
        icon:'', // URL图标
        otherIcon: '', //网址默认的icon地址
        name:'' ,// 网址名称
        isShow:false, // 是否显示
        isLoadingIcon: false, // 是否正在获取Icon
        isLoadingName: false, // 是否正在获取Name
        imgErr : false, // 图片是否显示正常
        id: -1, // 记录id
        whichTag: -1, // 添加到哪个标签中去
        alertType: '新增网址'
    },
    mutations: {
        // 修改增加URL弹框内的信息
        changeUrlInfo(state, playlod){
            let key, value, current
            if (Array.isArray(playlod)) {
                let length = playlod.length
                for (let i = 0; i < length; i++) {
                    current = playlod[i];
                    key = current.key
                    value = current.value
                    state[key] = value
                } 
            } else {
                key = playlod.key
                value = playlod.value
                state[key] = value
            }
        }
    }
}

export default  moduleUrl