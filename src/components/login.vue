<template>
  <v-container fluid class="fill-height">
    <v-row class="align-center justify-center">
      <v-sheet class="mx-auto border border-success border-opacity-100 pa-5 " width="400">
        <v-form @submit.prevent="login">
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
import {authInitAxiosRequest} from "../repository/api/auth_init.api.js";
import { useRouter } from "vue-router"
import Swal from "sweetalert2"

const userName = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  const payload = {
    username: userName.value,
    password_hash: password.value,
  }
  try {
    const response = await authInitAxiosRequest(payload)
      if (response.data.status === 200) {

      await router.push({ name: "home" })}else{
       await Swal.fire({
         icon: "error",
         title: "Login Field!",
         text: `${response.data.error}`,
         timer: 5000,
         showConfirmButton: false,
       })
     }
    } catch (err) {
    console.error("Login error:", err)
  }
}

</script>

<style scoped>

</style>