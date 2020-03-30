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
          <Toggle class="toggle" @sunChanged="updateTheme" @darkChanged="themeDark" />
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
            <Lang @langBtn="langBtn = $emit" />
            <div class="icon shadow_btn_white bg-background-main">
              <button class="btn_icon" @click="accountBtn" :class="{account_activ_btn}">
                <i class="icon-account"></i>
              </button>
              <div
                class="account_box bg-background-main shadow_btn_white"
                :class="{account_active}"
              >
                <div class="arrow"></div>
                <router-link class="text-copy-main" to="/entrance">Вход</router-link>
                <router-link class="text-copy-main" to="/registration">Регистрация</router-link>
              </div>
            </div>
            <div
              class="social icon shadow_btn_white bg-background-main bg-background-main"
              :class="{social_activ_btn}"
            >
              <button class="btn_icon" @click="socialBtn">
                <i class="icon-icon"></i>
              </button>
              <div class="social_block">
                <SocialNetwork
                  class="link bg-background-main shadow_btn_white_active"
                  :class="{social_activ: social_activ}"
                />
              </div>
            </div>
            <div class="icon shadow_btn_white bg-background-main">
              <button class="btn_icon" @click="burgerToggle" :class="{burger_activ_btn}">
                <i class="icon-menu"></i>
              </button>
              <div class="burger" :class="{burger_activ}">
                <div class="burger_content">
                  <Toggle class="burger_toggle" @sunChanged="updateTheme" @darkChanged="themeDark" />
                  <div class="close" @click="closeBtn">
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
                </div>
                <SocialNetwork class="burger_social" />
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
      theme: "theme-light",
      burger_activ: false,
      burger_activ_btn: false,
      social_activ: false,
      social_activ_btn: false,
      account_active: false,
      account_activ_btn: false,
      appActiveFon: false
      // lang_activ_btn: false,
      // lang_activ_block: false
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
    //Клики переключения темы
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
    },
    //Открыть бургер меню и закрыть все остальные кнопки (тестовая версия)
    burgerToggle() {
      (this.burger_activ = true),
        (this.burger_activ_btn = !this.burger_activ_btn),
        (this.social_activ_btn = false),
        (this.social_activ = false),
        (this.account_activ_btn = false),
        (this.account_active = false),
        (this.lang_activ_btn = false),
        (this.lang_activ_block = false),
        (this.appActiveFon = true);
    },
    //Закрыть бургер меню
    closeBtn() {
      (this.burger_activ = false),
        (this.burger_activ_btn = false),
        (this.appActiveFon = false);
    },
    //Открыть социальные сети
    socialBtn() {
      (this.social_activ = !this.social_activ),
        (this.social_activ_btn = !this.social_activ_btn),
        (this.account_activ_btn = false),
        (this.account_active = false),
        (this.lang_activ_btn = false),
        (this.lang_activ_block = false);
    },
    //Открыть окна входа,регистрации
    accountBtn() {
      (this.account_active = !this.account_active),
        (this.account_activ_btn = !this.account_activ_btn),
        (this.social_activ = false),
        (this.social_activ_btn = false),
        (this.lang_activ_btn = false),
        (this.lang_activ_block = false);
    },
    langBtn() {
      (this.social_activ = false),
        (this.social_activ_btn = false),
        (this.account_activ_btn = false),
        (this.account_active = false);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="sass">
.header
  position: relative
  & .fon
    top: 0
    left: 0
    right: 0
    height: 300px
    position: absolute
    z-index: 0
.header_box
  display: flex
  align-items: center
  justify-content: space-between
  padding: 30px 0
  position: relative
.header_block
  display: flex
  align-items: center
  & .header_logo
    max-width: 97px
    width: 100%
    margin-right: 20px
  & .header_time
    & p
      font-size: 1.4rem
.header_buttons
  display: flex
  align-items: center
  & .btn_status
    position: relative
    overflow: hidden
    border-radius: 4px
    margin-left: 20px
    &:after
      content: ''
      position: absolute
      width: 30px
      height: 100%
      background: #FFFFFF
      transform: skewX(-20deg)
      left: 0
      bottom: 0
      top: 0
      animation: btn_hover 2s infinite ease
      opacity: 0
      transition: 500ms ease
    &:hover:after
      opacity: 0.2
      transition: 500ms ease
    & .status
      border-radius: 4px
      padding: 12px 33px
      font-size: 1.8rem
      cursor: pointer
      transition: 500ms ease
      &:active
        transition: 500ms ease
  & .icon
    border-radius: 4px
    margin-left: 20px
    display: flex
    align-items: center
    justify-content: center
    position: relative
    & .btn_icon
      width: 50px
      height: 50px
      cursor: pointer
      transition: 500ms ease
      outline: none
      border-radius: 4px
      & i
        font-size: 2.5rem
      &:active
        border-radius: 4px
        transition: 500ms ease
  & .lang_box
    position: absolute
    top: 0px
    opacity: 0
    z-index: -10
    outline: none
  & .btn_icon
    position: relative
    z-index: 2
  & .link
    display: flex
    flex-direction: column
    align-items: center
    position: absolute
    width: 100%
    max-height: 350px
    z-index: -1
    // transition: 100ms ease
    top: 50px
    left: 0
    & a
      margin: -13px 0
      opacity: 0
      transition: 200ms ease
  & .social_activ,
  & .social_activ_btn,
    z-index: 2
    border-radius: 0  0 4px 4px
    & a
      margin: 6px 0
      opacity: 1
      & img
        width: 25px
  & .social_activ
    border-radius: 0  0 4px 4px
  & .social_activ_btn
    border-radius: 4px 4px 0 0

  & .account_box
    position: absolute
    bottom: -95px
    display: flex
    left: 0px
    flex-direction: column
    padding: 20px 20px 10px 20px
    border-radius: 4px
    opacity: 0
    z-index: -3
    & .arrow
      position: absolute
      left: 20px
      top: -18px
      border: 8px solid transparent
      border-bottom: 10px solid #e8edf1
      & a
        font-size: 1.8rem
        margin-bottom: 10px

  & .account_active
    opacity: 1
    z-index: 1
  & .lang_activ_block
    top: 49px
    opacity: 1
    z-index: 1

  & .btn_lang
    width: 50px
    height: 50px
//Burger
.burger
  position: fixed
  right: -1000px
  top: 0
  justify-content: space-between
  display: flex
  flex-direction: column
  bottom: 0
  overflow-y: scroll
  background:
  max-width: 500px
  width: 100%
  padding: 30px 20px
  background: linear-gradient(134.83deg, #363C46 0%, #1D2531 100%)
  transition: 250ms ease
  z-index: -100
  & .burger_toggle
    display: none
  & .burger_menu
    display: flex
    flex-direction: column
    margin-top: 80px
    & a
      font-size: 2rem
      padding: 10px 20px
      width: max-content
      transition: 250ms ease
      &:hover
        color: #00B047
        box-shadow: 4px 2px 6px #1B2027, -4px -2px 6px #3E4551
        border-radius: 4px
        background:
        padding: 10px 20px
        transition: 250ms ease
  & .close
    position: absolute
    top: 30px
    left: 40px
    border-radius: 4px
    box-shadow: 4px 2px 6px #1B2027, -4px -2px 6px #3E4551
    & .close_btn
      cursor: pointer
      display: flex
      align-items: center
      justify-content: center
      width: 50px
      height: 50px
      & span:nth-child(1),
      & span:nth-child(2)
        position: absolute
        transform: rotate(135deg)
        width: 30px
        height: 2px
        background: #7F848C
      & span:nth-child(2)
        transform: rotate(45deg)
      &:active
        box-shadow: inset 2px 2px 3px #1B2027, inset -1px -1px 3px #3E4551
        border-radius: 4px
.burger_activ
  right: 0
  transition: 250ms ease
  z-index: 100
@media screen and (max-width: 1200px)
  .header_buttons .btn_status,
  .header_buttons .icon
    margin-left: 10px
  .header_block .header_time p
    font-size: 1.2rem
  .header_buttons .btn_status .status
    font-size: 1.4rem
@media screen and (max-width: 1024px)
  .header_block .header_logo
    max-width: 80px
  .header_toggle .btn_sum, .header_toggle .btn_moon
    font-size: 1.8rem
    padding: 7px
  .lang img
    width: 25px
  .header_buttons .icon .btn_icon,
  .header_buttons .btn_lang
    width: 40px
    height: 40px
    & i
      font-size: 2rem
  .header_buttons .btn_status .status
    font-size: 1.2rem
    padding: 12px 20px
  .header_block .header_time p
    font-size: 1rem
  .header_buttons .lang_activ_block
    top: 38px
  .header_buttons .social_activ a img, .header_buttons .social_activ_btn a img
    width: 20px
  .header_buttons .social_activ a, .header_buttons .social_activ_btn a
    margin: 4px 0
  .header_buttons .link
    top: 40px
@media screen and (max-width: 992px)
  .header_block .header_logo
    margin-right: 10px
    max-width: 70px
  .header_buttons .btn_status .status
    font-size: 1rem
    padding: 12px 10px
  .header_toggle .btn_sum, .header_toggle .btn_moon
    font-size: 1.5rem
    padding: 5px
  .header_buttons .icon .btn_icon,
  .header_buttons .btn_lang
    width: 35px
    height: 35px
    & i
      font-size: 1.8rem
  .header_buttons .link
    top: 35px
  .header_buttons .lang_activ_block
    top: 33px
  .account_active
    & a
      font-size: 1.4rem
  .header_buttons .account_box
    padding: 15px 18px 15px 18px
  .header_buttons .account_box
    bottom: -85px
    left: -10px
@media screen and (max-width: 768px)
  .header_buttons .btn_status,
  .header_buttons  .social,
  .header_time,
  .success,
  .header_toggle,
  .reserves,
  .info
    display: none
  .header_buttons .account_box
    bottom: -85px
    left: -40px
  .header_buttons .account_box .arrow
    left: 50px
  //Кнопка смена языка
  .header_buttons .lang_box
    position: initial
    opacity: 1
    border-radius: 0 4px 4px 0
    z-index: 0
  //Бургер меню
  .burger
    max-width: 260px
    padding: 30px 8px 15px 8px
    & .header_toggle
      display: block
      margin-right: 0
      margin-left: 13px
      & .btn_sum,
      & .btn_moon
        padding: 9px
        font-size: 1.8rem
        background: #2E3540
        box-shadow: inset 3px 3px 6px #1E232D, inset -2px -1px 6px #424853
        border-radius: 8px 0px 0px 8px
        overflow: hidden
      & .btn_moon
        border-radius: 0px 8px 8px 0px
      & .activeSun
        box-shadow: 4px 2px 6px #1B2027, -4px -2px 6px #3E4551
      & .activeDark
        box-shadow: 4px 2px 6px #1B2027, -4px -2px 6px #3E4551
  .burger_social
    flex-wrap: wrap
    margin: 20px 0 0 12px
    & a
      width: 25px
      margin-right: 15px
      margin-bottom: 15px
  .burger .burger_menu
    margin-top: 20px
    & a
      font-size: 1.4rem
      padding: 7px 13px
  .burger .close
  .burger .burger_menu a:hover
    padding: 7px 13px
  .burger .close
    left: auto
    right: 16px
    & .close_btn
      width: 36px
      height: 36px
      & span:nth-child(1),
      & span:nth-child(2)
        width: 25px
</style>