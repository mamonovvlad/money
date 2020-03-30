<template>
  <div class="header_toggle">
    <button class="btn_sum bg-background-main" @click.prevent="sun" :class="{activeSun}">
      <i class="icon-sum"></i>
    </button>
    <button class="btn_moon bg-background-main" @click.prevent="dark" :class="{activeDark}">
      <i class="icon-moon"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "theme-light",
      activeSun: true,
      activeDark: false
    };
  },
  methods: {
    sun() {
      const sunTheme = (this.theme = "theme-light");
      localStorage.setItem("theme", sunTheme);
      this.$emit("sunChanged", sunTheme);
      this.activeSun = true;
      this.activeDark = false;
    },
    dark() {
      const darkTheme = (this.theme = "theme-dark");
      localStorage.setItem("theme", darkTheme);
      this.$emit("darkChanged", darkTheme);
      this.activeDark = true;
      this.activeSun = false;
    }
  }
};
</script>

<style lang="sass">
.header_toggle
  margin-right: 20px
  display: flex
  & .btn_sum,
  & .btn_moon
    font-size: 2.2rem
    border-radius: 8px 0px 0px 8px
    padding: 9px
    cursor: pointer
    outline: none
    transition: 250ms ease
  & .btn_moon
    border-radius: 0px 8px 8px 0px
    transition: 500ms ease
    & .activeSun,
    & .activeDark
      transition: 500ms ease
</style>