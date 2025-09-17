<template>
<v-container >
  <Navbar />
  <Header />
</v-container>
</template>

<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "Home",
  components: {Navbar, Header}
}
</script>

<style scoped>

</style>