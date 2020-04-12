<template>
  <div class="passwordRecovery" :class="{recovery}">
    <perfect-scrollbar class="scroll_box scroll">
      <div class="passwordRecovery_box bg-background-main shadow_btn_white">
        <div class="close" @click="$emit('closeModal')">
          <i class="icon-cancel"></i>
        </div>
        <p class="passwordRecovery_title text-copy-descr">Востановление пароля</p>
        <p
          class="passwordRecovery_descr"
        >Пожалуйста, заполните Вашу электронную почту. Ссылка для сброса пароля будет отправлена туда.</p>
        <form class action>
          <label class="text-copy-descr" for="passwordRecovery_mail">E-mail</label>
          <input
            id="passwordRecovery_mail"
            class="bg-background-main shadow_btn_white_active text-copy-descr"
            type="mail"
            placeholder="tolik.wwwww@ukr.net"
          />
          <button class="green_btn text-copy-btngreen form_btn" type="submit">Войти</button>
        </form>
      </div>
    </perfect-scrollbar>
  </div>
</template>

 
<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
export default {
  props: {
    recovery: {}
  },
  // data() {
  //   return {
  //     // showPasswordRecovery: false
  //   };
  // },
  components: {
    PerfectScrollbar
  }
};
</script>

<style lang="sass">
.passwordRecovery
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: none

  background: rgba(255,255,255,.6)

  z-index: 10
.passwordRecovery_box
  position: relative
  max-width: 425px
  width: 100%
  padding: 30px 25px
  border-radius: 8px
  & .close
    position: absolute
    right: 0
    top: 0
    padding: 5px 10px
    cursor: pointer
  & .passwordRecovery_title
    font-weight: bold
    font-size: 2.4rem
    margin-bottom: 10px
  & .passwordRecovery_descr
    font-weight: normal
    font-size: 1.4rem
    margin-bottom: 20px
  & label
    font-size: 1.4rem
    font-weight: 500
  & input
    border-radius: 4px
    max-width: 365px
    width: 100%
    height: 45px
    padding: 2px 20px 0
    margin: 12px 0 18px
    font-size: 1.8rem
  & .form_btn
    margin: 0px 0 0 0
.recovery
  display: block
@media screen and (max-width: 768px)
  .passwordRecovery
    & .passwordRecovery_title
      font-size: 1.8rem
      margin-bottom: 10px
    & .passwordRecovery_descr
      font-size: 1.2rem
      margin-bottom: 10px
    & label,
      font-size: 1.2rem
    & input
      font-size: 1.4rem
</style>