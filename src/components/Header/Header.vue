<template>
  <header class="header" id="header">
    <div class="fon bg-background-descr"></div>
    <div class="app_fon" :class="appActive"></div>
    <div class="container">
      <div class="header_box">
        <div class="header_block">
          <div class="header_logo">
            <img src="@/assets/image/header/logo.svg" alt="logo" />
          </div>
          <Toggle @sunChanged="updateTheme" @darkChanged="themeDark" />
          <div class="header_time text-copy-main">
            <p class>
              График работы:
              <span class="text-copy-descr">Ежедневно, 08:00 - 22:00</span>
            </p>
            <p>
              Время на сайте:
              <span class="text-copy-descr">{{ date | date('time') }}</span>
            </p>
          </div>
        </div>
        <div class="header_block">
          <div class="header_buttons">
            <div class="btn_status bg-background-status">
              <button class="status text-copy-btngreen">Проверить статус операции</button>
            </div>
            <Lang />
            <div class="account shadow-btn">
              <button
                class="btn_account"
                @click="account_active = !account_active,account_activ_btn = !account_activ_btn"
                :class="{account_activ_btn: account_activ_btn}"
              >
                <img src="@/assets/image/header/account.svg" alt="account" />
              </button>
              <div class="account_box bg-background-main" :class="{account_active: account_active}">
                <div class="arrow"></div>
                <router-link class="text-copy-main" to="/entrance">Вход</router-link>
                <router-link class="text-copy-main" to="/registration">Регистрация</router-link>
              </div>
            </div>
            <div class="social shadow-btn" :class="{social_activ_btn: social_activ_btn}">
              <button
                class="btn_icon"
                @click="social_activ = !social_activ,social_activ_btn = !social_activ_btn"
              >
                <img src="@/assets/image/header/icon.svg" alt="icon" />
              </button>
              <div class="social_block">
                <SocialNetwork class="link" :class="{social_activ: social_activ}" />
              </div>
            </div>
            <div class="menu shadow-btn">
              <button
                class="btn_menu"
                @click="burger_activ = true,burger_activ_btn = !burger_activ_btn, appActiveFon = true"
                :class="{burger_activ_btn: burger_activ_btn}"
              >
                <img src="@/assets/image/header/menu.svg" alt="menu" />
              </button>
              <div class="burger" :class="{ burger_activ: burger_activ}">
                <div
                  class="close"
                  @click="burger_activ = false, burger_activ_btn = false,appActiveFon = false"
                >
                  <div class="close_btn">
                    <span class="text-copy-main"></span>
                    <span class="text-copy-main"></span>
                  </div>
                </div>
                <div class="burger_menu">
                  <router-link to="/">Обменять</router-link>
                  <router-link to="/news">Новости</router-link>
                  <router-link to="/faq">FAQ</router-link>
                  <router-link to="/reviews">Отзывы</router-link>
                  <router-link to="/affiliate-program">Партнерская программа</router-link>
                  <router-link to="/status">Проверить статус операции</router-link>
                  <router-link to="/how-exchange">Как обменять</router-link>
                  <router-link to="/agreement">Соглашение</router-link>
                  <router-link to="/rules">Правила</router-link>
                  <router-link to="/security">Безопасность</router-link>
                </div>
                <SocialNetwork />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Toggle from "@/components/Header/Toggle";
import Lang from "@/components/Header/Lang";
import SocialNetwork from "@/components/Header/SocialNetwork";
export default {
  data: function() {
    return {
      date: new Date(),
      interval: null,
      theme: "",
      burger_activ: false,
      burger_activ_btn: false,
      social_activ: false,
      social_activ_btn: false,
      account_active: false,
      account_activ_btn: false,
      appActiveFon: false
    };
  },
  components: {
    Toggle,
    Lang,
    SocialNetwork
  },
  computed: {
    appActive: function() {
      return {
        appActiveFon: this.appActiveFon
      };
    }
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  methods: {
    updateTheme() {
      this.theme = "theme-light";
      const sunTheme = (this.theme = "theme-light");
      localStorage.setItem("theme", sunTheme);
      this.$emit("sunChanged", sunTheme);
    },
    themeDark() {
      this.theme = "theme-dark";
      const darkTheme = (this.theme = "theme-dark");
      localStorage.setItem("theme", darkTheme);
      this.$emit("darkChanged", darkTheme);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
