<template>
<v-container fluid >
  <Navbar />
  <Header />
<Section />
  <Footer />
</v-container>
</template>

<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
import Section from "./sections/index.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: {Footer, Section, Navbar, Header}
}
</script>

<style scoped>

</style>