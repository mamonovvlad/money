<template>
  <div class="main_layout text-copy-main bg-background-main">
      <Header @sunChanged="updateTheme" @darkChanged="themeDark" />
      <router-view />
      <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
export default {
  name: "app",
  data() {
    return {
      theme: "theme-light"
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    updateTheme() {
      this.$emit("theme_light");
    },
    themeDark() {
      this.$emit("theme_dark");
    }
  }
};
</script>