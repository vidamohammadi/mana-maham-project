<template>
  <v-container fluid class="fill-height">
    <v-row class="align-center justify-center">
      <v-sheet class="mx-auto border border-success border-opacity-100 pa-5 " width="400">
        <v-form>
          <v-text-field
              v-model="userName"
              variant="outlined"
              label="User name"
          ></v-text-field>
          <v-text-field
              v-model="password"
              variant="outlined"
              label="Password"
          ></v-text-field>
          <v-btn class="mt-2 bg-success" type="submit" block>Login</v-btn>
        </v-form>
      </v-sheet>
    </v-row>



   </v-container>

</template>
<script setup>
import {ref} from "vue"

const userName = ref('')
const password = ref('')

</script>

<style scoped>

</style>