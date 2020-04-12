<template>
  <form class="entrance">
    <label class="text-copy-descr" for="entrance_mail">E-mail</label>
    <input
      id="entrance_mail"
      class="bg-background-main shadow_btn_white_active text-copy-descr"
      type="mail"
      placeholder="tolik.wwwww@ukr.net"
    />
    <label class="text-copy-descr" for="entrance_password">Пароль</label>
    <input
      id="entrance_password"
      class="bg-background-main shadow_btn_white_active text-copy-descr"
      type="password"
      placeholder="***************"
    />
    <button class="forgot" @click.prevent="$emit('openPasswordRecovery')">Забыли пароль?</button>
    <button class="green_btn text-copy-btngreen form_btn" type="submit">Войти</button>
  </form>
</template>




<style lang="sass">
.entrance
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

  & #entrance_password::placeholder
    transform: translate(0px, 4px)
  & .forgot
    font-size: 1.4rem
    border-bottom: 1px solid
    outline: none
  & .form_btn
    margin: 18px 0 0 0
@media screen and (max-width: 768px)
  .entrance
    & label, .forgot
      font-size: 1.2rem
    & input
      font-size: 1.4rem
</style>