import {defineStore} from "pinia";
import {reactive} from "vue";

export const useHeaderStore = defineStore('header', {
    state: () =>({
        headerState: reactive([])
    }),
    getters:{
        header: state => state.headerState
    },
    actions:{
        setHeader(data) {
            this.headerState = data
        }
    }
})