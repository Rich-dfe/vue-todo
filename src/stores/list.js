import { defineStore } from "pinia";

export const useListStore = defineStore("list", () => {
    const items = ref()

    items.value = [
        { text: 'Details', subtext:0, icon: 'mdi-clock' },
        { text: 'Audience', subtext:0,icon: 'mdi-account' },
        { text: 'Conversions', subtext:0,icon: 'mdi-flag' },
      ]

      function fn(){
        items.value[0].subtext++
        items.value[1].subtext++
        items.value[2].subtext++
      }

    return { items,fn };
});