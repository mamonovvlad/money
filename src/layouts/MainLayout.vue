<template>
  <div class="main_layout text-copy-main bg-background-main" :class="theme">
    <div class="dark_main_fon"></div>
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
    Footer
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },
  methods: {
    updateTheme() {
      this.theme = "theme-light";
    },
    themeDark() {
      this.theme = "theme-dark";
    }
  }
};
</script>