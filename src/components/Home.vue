<template>
<v-container >
  <Navbar />
  <Header />
<Section />
</v-container>
</template>

<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
import Section from "./sections/index.vue";

export default {
  name: "Home",
  components: {Section, Navbar, Header}
}
</script>

<style scoped>

</style>