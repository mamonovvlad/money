<template>
  <div class="home grow">
    <div class="fon bg-background-descr"></div>
    <Exchange @removeBlock="removeInfo" />
    <Success :class="{dn}" />
    <Reserves :class="{dn}" />
    <Info :class="{dn}" />
  </div>
</template>

<script>
import Exchange from "@/components/Home/Exchange";
import Info from "@/components/Home/Info";
import Success from "@/components/Home/Success";
import Reserves from "@/components/Home/Reserves";
export default {
  data() {
    return {
      dn: false
    };
  },
  components: {
    Exchange,
    Info,
    Success,
    Reserves
  },
  methods: {
    removeInfo() {
      this.dn = true;
    }
  }
};
</script>

<style lang="sass">
//Основные стили ,страницы Home

.title_heading
  margin: 50px 0 20px
  font-weight: bold
  font-size: 3.6rem
.title_section
  font-weight: bold
  font-size: 2.4rem
@media screen and (max-width: 992px)
  .title_heading
    font-size: 3rem
@media screen and (max-width: 768px)
  .title_section
    font-size: 2rem
</style>