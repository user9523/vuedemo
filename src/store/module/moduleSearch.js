const moduleSearch = {
    state:{
        isSearch: false,
        searchWord: ''
    },
    mutations:{
        changesearchWord(state,payload){
            state.searchWord = payload
        },
        changeIsSearch(state,payload){
            state.isSearch = payload
        }
    }
}

export default moduleSearch