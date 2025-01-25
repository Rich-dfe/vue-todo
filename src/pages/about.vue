<template>
  <v-card class="mx-auto" max-width="300">
    <v-list disabled>
      <v-list-subheader>REPORTS</v-list-subheader>

      <v-list-item v-for="(item, i) in listStore.items" :key="i">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
        <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
  <v-btn class="mt-2" type="submit" block @click="listStore.fn">Submit</v-btn>
</template>
<script setup>
import { ref } from "vue";
import { useListStore } from "@/stores/list";
const listStore = useListStore()



// const items = ref();

// items.value = [
//   { text: 1, icon: "mdi-clock" },
//   { text: "Audience", icon: "mdi-account" },
//   { text: "Conversions", icon: "mdi-flag" },
// ];

// function fn() {
//   console.log("FN Pressed");
//   items.value[0].text++;
// }
</script>
