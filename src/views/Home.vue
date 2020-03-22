<template>
  <div class="home grow">
    <Exchange />
    <Success />
    <Reserves />
    <Info />
  </div>
</template>

<script>
import Exchange from "@/components/Home/Exchange";
import Info from "@/components/Home/Info";
import Success from "@/components/Home/Success";
import Reserves from "@/components/Home/Reserves";
export default {
  data() {
    return {};
  },
  components: {
    Exchange,
    Info,
    Success,
    Reserves
  }
};
</script>

<style lang="sass">
//Основные стили ,страницы Home
.title_heading
  margin: 50px 0 20px
  font-weight: bold
  font-size: 36px
  color: #363C46
.title_section
  font-weight: bold
  font-size: 2.4rem
  color: #363C46
</style>