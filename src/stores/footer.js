import {defineStore} from "pinia";
import {reactive} from "vue";

export const useFooterStore = defineStore('footer', {
    state: () =>({
        footerState: reactive([])
    }),
    getters:{
        footer: state => state.footerState
    },
    actions:{
        setFooter(data) {
            this.footerState = data
        }
    }
})