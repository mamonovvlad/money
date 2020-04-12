<template>
  <div class="cabinet_layout text-copy-main bg-background-main">
    <Header @sunChanged="updateTheme" @darkChanged="themeDark" />
    <div class="cabinet_box">
      <div class="cabinet_menu">f</div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
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


<style lang="sass">
.cabinet_box
  height: 100%
  display: flex
.cabinet_menu
  max-width: 360px
  width: 100%
</style>