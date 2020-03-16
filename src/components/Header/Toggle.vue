<template>
  <div class="header_toggle">
    <button class="btn_sum" @click.prevent="sun" :class="{activeSun}">
      <img src="@/assets/image/header/sum.svg" alt="sum" />
    </button>
    <button class="btn_moon" @click.prevent="dark" :class="{activeDark}">
      <img src="@/assets/image/header/moon.svg" alt="moon" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "",
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
