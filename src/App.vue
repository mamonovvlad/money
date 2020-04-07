<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

  
<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
};
</script>



<!--Подключение стилей -->
<style lang="sass">
@import 'assets/css/fonts.css'
@import 'assets/css/fontello.css'
@import 'assets/sass/main'
</style>
