<template>
  <v-card class="border border-opacity-100 border-error rounded pa-3" height="400px" variant="outlined">
    <v-img :src="props.data.imageUrl" height="250px"/>
    <span class="font-weight-bold text-blue-darken-4 py-3">{{props.data.title}}</span>
    <p class="text-caption">
      {{props.data.description}}
    </p>
  </v-card>

</template>

<script setup>
const props = defineProps({
  data: {type: Object}
});
</script>

<style scoped>

</style>