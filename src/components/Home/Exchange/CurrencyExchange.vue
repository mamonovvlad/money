<template>
  <div class="currency_exchange shadow_btn_white bg-background-main">
    <h2 class="title_section exchange_title">PerfectMoney USD на Яндекс Деньги</h2>
    <!--Форма-->
    <form class="form_exchange" action>
      <label for="give">
        Отдаёте
        <input class="bg-background-main" id="give" type="number" placeholder="120 btc" />
        <div class="inp_img">
          <img src="@/assets/image/home/currency/bitcoin.svg" alt="bitcoin" />
        </div>
        <div class="min_max">
          <div class="min">
            <p>
              Min:
              <span>2344</span>
            </p>
          </div>
          <div class="max">
            <p>
              Max:
              <span>3344</span>
            </p>
          </div>
        </div>
      </label>
      <label for="get">
        Получаете
        <input
          class="bg-background-main"
          id="get"
          type="number"
          placeholder="12 214 122, 88 rub"
        />
        <div class="inp_img">
          <img src="@/assets/image/home/currency/usd.svg" alt="usd" />
        </div>
        <div class="min_max">
          <div class="min">
            <p>
              Min:
              <span>2344</span>
            </p>
          </div>
          <div class="max">
            <p>
              Max:
              <span>3344</span>
            </p>
          </div>
        </div>
      </label>
      <label for="commissions_one">
        С учетом комиссии
        <input
          class="bg-background-main"
          id="commissions_one"
          type="number"
          placeholder="122 btc"
        />
      </label>
      <label for="commissions_two">
        С учетом комиссии
        <input
          class="bg-background-main"
          id="commissions_two"
          type="number"
          placeholder="122 btc"
        />
      </label>
      <label for="discount">
        С учетом скидки
        <input
          class="bg-background-main not_active"
          id="discount"
          type="number"
          disabled="disabled"
          placeholder="122 btc"
        />
      </label>
      <!--Линия-->
      <div class="line"></div>
      <!--Конец Линии-->
      <label for="this_account">
        Заплатить с этого счёта
        <input
          class="bg-background-main"
          id="this_account"
          type="number"
          placeholder="120122442432"
        />
        <div class="inp_img account_img">
          <img src="@/assets/image/home/currency/bitcoin.svg" alt="bitcoin" />
        </div>
      </label>
      <label for="to_account">
        Зачислить на этот счет
        <input
          class="bg-background-main"
          id="to_account"
          type="number"
          placeholder="1201205225"
        />
        <div class="inp_img account_img">
          <img src="@/assets/image/home/currency/usd.svg" alt="usd" />
        </div>
      </label>
      <button class="green_btn text-copy-btngreen form_btn" type="submit">Обменять</button>
    </form>
    <!--Конец Формы-->
  </div>
</template>


<style lang="sass">
.currency_exchange
  padding: 30px 0 0 0px
  border-radius: 10px
  height: min-content
  & .exchange_title
    padding: 0px 40px 0
    margin-bottom: 30px
.form_exchange
  padding: 0px 30px 0
  display: flex
  flex-wrap: wrap
  & label
    display: flex
    flex-direction: column
    margin: 0 10px
    width: 46%
    font-size: 1.4rem
    color: #363C46
    font-weight: 500
    margin-bottom: 30px
    position: relative
    & .inp_img
      position: absolute
      right: 12px
      bottom: 39px
      & img
        width: 22px
    & .account_img
      bottom: 12px
    & .not_active
      background: #D9E1E8
      box-shadow: 0 0 0
      &:focus,
      &:active
        box-shadow: 0 0 0
  & input
    margin-top: 12px
    border-radius: 4px
    font-weight: 400
    font-size: 1.8rem
    color: #363C46
    padding: 16px 38px 11px 20px
    box-shadow: inset 3px 3px 3px rgba(136, 165, 191, 0.48), inset -3px -3px 3px #FFFFFF
    transition: 500ms ease
    cursor: pointer
    &[type='number']
      -moz-appearance: textfield
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button
        -webkit-appearance: none
      &:focus,
      &:active
        box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -4px -2px 8px #FFFFFF
  & .min_max
    margin-top: 10px
    display: flex
    justify-content: space-between
    font-size: 1.2rem
  & p
    color: #7F848C
    font-weight: 400
  & span
    font-weight: 500
    color: #363C46
  & .line
    height: 3px
    width: 100%
    background: #D9E1E8
    margin: 0 10px 30px 10px
  & .form_btn
    margin: 0 10px 30px
    outline: none
</style>