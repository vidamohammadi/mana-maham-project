import {defineStore} from "pinia";
import {reactive} from "vue";

export const useSectionItemsStore = defineStore('section', {
    state: () =>({
        sectionItemState: reactive([])
    }),
    getters:{
      sectionItems: state => state.sectionItemState
    },
    actions:{
       setSectionItems(data) {
           this.setSectionItemsState = data
       }
    }
})