<template>
<v-row>
  <v-col cols="12" md="6" class="mt-3">
    <v-img :src="headerStore.header.imageUrl" />
   </v-col>
  <v-col cols="12" md="6">
    <h1 class="mb-5">
      {{headerStore.header.title}}
    </h1>
    <p>
      {{headerStore.header.description}}
    </p>
  </v-col>
</v-row>
</template>

<script setup>
import { onMounted } from "vue";
import { useHeaderStore } from "../stores/header.js";
import header from "../data/header.json";

const headerStore = useHeaderStore();

onMounted(() => {
  headerStore.setHeader(header);
  console.log("Section Items:", headerStore.header);
});
</script>


<style scoped>

</style>