<template>
  <v-divider opacity="80" class="w-100 my-10" color="error" >
  <span class="text-body-1 text-error">footer</span>
  </v-divider>
  <v-row>
    <v-col cols="12" lg="6">
      <v-img :src="footerStore.footer.imageUrl" height="300px"/>
    </v-col>
    <v-col cols="12" lg="6">
      <p class="font-weight-bold text-body-1 mb-8">
        Contact Us
      </p>
      <p class="text-caption ">
        {{footerStore.footer.phone}}
        <br />
        {{footerStore.footer.address}}
      </p>


    </v-col>
  </v-row>
</template>

<script setup>
import { onMounted } from "vue";
import { useFooterStore } from "../stores/footer.js";
import footer from "../data/footer.json";

const footerStore = useFooterStore();

onMounted(() => {
  footerStore.setFooter(footer);
});
</script>

<style scoped>

</style>