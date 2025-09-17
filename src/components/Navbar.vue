<template>
<v-row class="d-flex justify-space-between">
<v-col cols="6">
<v-icon color="orange" size="40">
  mdi-book-open-page-variant
</v-icon>
</v-col>
<v-col cols="6" dir="rtl">
  <v-btn class="bg-orange" color="white" variant="outlined" @click="logOut">Log out</v-btn>
</v-col>
  <v-divider />
</v-row>
</template>

<script setup>
import { useRouter } from "vue-router"
import '@mdi/font/css/materialdesignicons.css'

const router = useRouter()
const logOut = () =>{
   router.push({ name: "login" })
}
</script>

<style scoped>

</style>