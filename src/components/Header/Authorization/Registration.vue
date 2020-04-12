<template>
  <form class="registration">
    <label class="text-copy-descr" for="registration_name">Имя*</label>
    <input
      id="registration_name"
      class="bg-background-main shadow_btn_white_active text-copy-descr"
      type="text"
      required
    />
    <label class="text-copy-descr" for="registration_mail">Email*</label>
    <input
      id="registration_mail"
      class="bg-background-main shadow_btn_white_active text-copy-descr"
      type="mail"
      required
    />
    <label class="text-copy-descr" for="registration_password">Пароль*</label>
    <input
      id="registration_password"
      class="bg-background-main shadow_btn_white_active text-copy-descr"
      type="password"
      required
    />
    <label class="text-copy-descr" for="registration_сonfirm_password">Повторите пароль*</label>
    <input
      id="registration_сonfirm_password"
      class="bg-background-main shadow_btn_white_active text-copy-descr"
      type="password"
      required
    />
    <label class="text-copy-descr" for="registration_link">Ссылка на ID реферала</label>
    <input
      id="registration_link"
      class="bg-background-main shadow_btn_white_active text-copy-descr"
      type="text"
    />
    <div class="window_robot bg-background-descr">
      <p>Окно “Я не робот”</p>
    </div>
    <button class="green_btn text-copy-btngreen form_btn" type="submit">Войти</button>
  </form>
</template>


<style lang="sass">
.registration
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
  & .window_robot
    padding: 12px 10px
    border-radius: 4px
    text-align: center
  & .form_btn
    margin: 18px 0 0 0
@media screen and (max-width: 768px)
  .registration
    & label
      font-size: 1.2rem
    & input
      font-size: 1.4rem
</style>