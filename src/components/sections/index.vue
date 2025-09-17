<template>
  <h1 class="my-5 text-blue-darken-3">Books</h1>

  <v-row>
    <v-col cols="12" md="4" v-for="(item, index ) in sectionItemsStore.sectionItems" :key="index">
      <SectionItem :data="item" />
    </v-col>
  </v-row>

 </template>

<script setup>
import { onMounted } from "vue";
import { useSectionItemsStore } from "../../stores/section";
import sectionItems from "../../data/sectionItems.json";
import SectionItem from "./SectionItem.vue";

const sectionItemsStore = useSectionItemsStore();

onMounted(() => {
  sectionItemsStore.setSectionItems(sectionItems);
 });
</script>

<style scoped>

</style>