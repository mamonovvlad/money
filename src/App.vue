<template>
  <div id="app" :class="theme">
    <perfect-scrollbar class="scroll main_scroll">
      <component :is="layout" @theme_light="updateTheme" @theme_dark="themeDark">
        <router-view />
      </component>
    </perfect-scrollbar>
  </div>
</template>

  
<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";
import CabinetLayout from "@/layouts/CabinetLayout";
export default {
  data() {
    return {
      theme: ""
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    EmptyLayout,
    MainLayout,
    CabinetLayout,
    PerfectScrollbar
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



<!--Подключение стилей -->
<style lang="sass">
@import 'assets/css/fonts.css'
@import 'assets/css/fontello.css'
@import 'assets/sass/main'
</style>
