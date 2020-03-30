<template>
  <div
    class="currency_exchange shadow_btn_white bg-background-main"
    v-if="tabelShowExchange"
  >
    <div class="exchange_title">
      <h2 class="title_section">PerfectMoney USD на Яндекс Деньги</h2>
      <button class="btn_exchange shadow_btn_white bg-background-main" v-if="exchangeBlocksActive">
        <svg>
          <rect />
        </svg>
        <p>
          <span class="time">{{ currentTime }}</span>
          Курс:
          <span class="course">1 к 2345</span>
        </p>
      </button>
    </div>
    <div class="scoreboard" v-if="exchangeBlocksActive">
      <button>
        <i class="icon-datainput"></i>
        Ввод данных
      </button>
      <button class="scoreboardActive">
        <i class="icon-payment"></i>
        Оплата
      </button>
      <button>
        <i class="icon-completion"></i>
        Завершение
      </button>
    </div>
    <!--Форма-->
    <form class="form_exchange" action>
      <div class="inp_block">
        <label for="give">Отдаёте</label>
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
        <div class="checkbox" v-if="exchangeBlocksActive">
          <input type="checkbox" id="checkbox" />
          <label class="checkbox_inp" for="checkbox">Мой кошелёк Perfect Money верифицирован</label>
        </div>
      </div>
      <div class="inp_block">
        <label for="get">Получаете</label>
        <input class="bg-background-main" id="get" type="number" placeholder="12 214 122, 88 rub" />
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
      </div>
      <div class="inp_block">
        <label for="commissions_one">
          С учетом комиссии
          <span class="text_green" v-if="exchangeBlocksActive">2.00% = 1.7 USD</span>
        </label>
        <input class="bg-background-main" id="commissions_one" type="number" placeholder="122 btc" />
      </div>
      <div class="inp_block">
        <label for="commissions_two">
          С учетом комиссии
          <span class="text_green" v-if="exchangeBlocksActive">2.00% = 1.7 USD</span>
        </label>
        <input class="bg-background-main" id="commissions_two" type="number" placeholder="122 btc" />
      </div>
      <div class="inp_block">
        <label for="discount">С учетом скидки</label>
        <input
          class="bg-background-main not_active"
          id="discount"
          type="number"
          disabled="disabled"
          placeholder="122 btc"
        />
      </div>
      <!--Линия-->
      <div class="line"></div>
      <!--Конец Линии-->
      <div class="inp_block">
        <label for="this_account">Заплатить с этого счёта</label>
        <input
          class="bg-background-main"
          id="this_account"
          type="number"
          placeholder="120122442432"
        />
        <div class="inp_img account_img">
          <img src="@/assets/image/home/currency/bitcoin.svg" alt="bitcoin" />
        </div>
      </div>
      <div class="inp_block">
        <label for="to_account">Зачислить на этот счет</label>
        <input class="bg-background-main" id="to_account" type="number" placeholder="1201205225" />
        <div class="inp_img account_img">
          <img src="@/assets/image/home/currency/usd.svg" alt="usd" />
        </div>
      </div>
      <div class="line" v-if="exchangeBlocksActive"></div>
      <div class="inp_block" v-if="exchangeBlocksActive">
        <label for="exchange_name">Имя держателя карты</label>
        <input class="bg-background-main" id="exchange_name" type="text" placeholder="Василий" />
      </div>
      <div class="inp_block" v-if="exchangeBlocksActive">
        <label for="exchange_surname">Фамилия держателя карты</label>
        <input class="bg-background-main" id="surname" type="text" placeholder="Петров" />
      </div>
      <div class="inp_block" v-if="exchangeBlocksActive">
        <label for="exchange_tel">Номер телефона</label>
        <input
          class="bg-background-main"
          id="exchange_tel"
          type="tel"
          placeholder="+38 (068) 72 50 152"
        />
      </div>
      <div class="inp_block" v-if="exchangeBlocksActive">
        <label for="exchange_mail">Электронная почта</label>
        <input
          class="bg-background-main"
          id="exchange_mail"
          type="mail"
          placeholder="tolik.wwwww@ukr.net"
        />
      </div>
      <div class="checkbox confirm" v-if="exchangeBlocksActive">
        <input type="checkbox" id="confirm" />
        <label
          class="checkbox_inp"
          for="confirm"
        >Нажимая на кнопку, я подтверждаю, что я ознакомился и согласен с условиями Безопасности и Правилами сайта</label>
      </div>
      <button class="green_btn text-copy-btngreen form_btn" type="submit">Обменять</button>
    </form>
    <!--Конец Формы-->
  </div>
</template>

<script>
export default {
  props: {
    exchangeBlocksActive: {
      exchangeBlocksActive: Boolean
    }
  },
  data() {
    return {
      currentTime: 140,
      timer: null
    };
  },
  mounted() {
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
  methods: {
    tabelShowExchange() {},
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    }
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    }
  }
};
</script>

<style lang="sass">
.currency_exchange
  padding: 30px 0 30px 0px
  border-radius: 10px
  height: min-content
  max-width: 1000px
  width: 100%
  transition: 500ms ease
  & .exchange_title
    padding: 0px 40px 0
    margin-bottom: 30px
    display: flex
    justify-content: space-between
.form_exchange
  padding: 0px 30px  0px 30px
  display: flex
  flex-wrap: wrap
.inp_block
  display: flex
  flex-direction: column
  margin: 0 10px
  width: calc(50% - 20px)
  font-size: 1.4rem
  color: #363C46
  font-weight: 500
  margin-bottom: 30px
  position: relative
  &:nth-child(12),
  &:nth-child(13)
    margin-bottom: 0
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
  & .discount
    &:focus,
    &:active
      box-shadow: 0px 0px 0px , 0px 0px 0px
  & .text_green
    color: #4CD784
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
.form_btn
  margin: 0 10px
  outline: none
.line
  height: 3px
  width: 100%
  background: #D9E1E8
  margin: 0 10px 30px 10px
//Добавление элементов в блок
.btn_exchange
  padding: 10px 12px
  height: max-content
  font-size: 1.4rem
  border-radius: 4px
  position: relative
  outline: 0
  & svg,
  & svg rect
    position: absolute
    top: 0px
    left: 0px
    padding: 2px
    width: 100%
    height: 100%
    fill: transparent
    border-radius: 4px
  & svg rect
    animation: border  195s ease
    stroke: #4CD784
    stroke-width: 4
    stroke-dasharray: 480
    stroke-dashoffset: 480

  & p
    width: max-content
  & .time
    color: #00B047
    font-size: 1.8rem
    margin-right: 25px
    position: relative
    display: inline-flex
    width: 40px
    height: 14px
    justify-content: center
    &:before
      content: ''
      height: 100%
      position: absolute
      right: -15px
      width: 2px
      background: #D9E1E8
  & .course
    font-weight: 600
    color: #000
.scoreboard
  display: flex
  margin: 0 40px 30px
  padding: 17px 35px
  border-radius: 8px
  justify-content: space-between
  background: #D9E1E8
  align-items: center
  position: relative
  z-index: 1
  &:after
    content: ''
    position: absolute
    border: 2px dashed #C9D4DE
    left: 40px
    right: 40px
    z-index: -1
  & button
    display: flex
    align-items: center
    background: #D9E1E8
    padding: 0 15px
    font-weight: 500
    font-size: 1.8rem
    transition: 250ms
    &:hover i
      color: #00B047
      transition: 250ms
    &:hover
      color: #363C46
      transition: 250ms
  & i
    font-size: 2.5rem
    margin-right: 15px
  .scoreboardActive
    color: #363C46
    transition: 250ms
    & i
      color: #00B047
      transition: 250ms

.checkbox
  display: flex
  align-items: baseline
  position: relative
  margin-top: 15px
  & input
    display: none
    position: absolute
    &:checked + .checkbox_inp:after
      opacity: 1
  & .checkbox_inp
    width: 100%
    margin: 0
    display: flex
    align-items: center
    &:before,
    &:after
      content: ''
      display: inline-flex
      width: 25px
      height: 25px
      background: #E8EDF1 url('../../../assets/image/check_grey.svg') center no-repeat
      margin: 0 10px 0 0
      box-shadow: 2px 2px 3px rgba(136, 165, 191, 0.48), -2px -2px 6px #FFFFFF
      border-radius: 2px
      transition: 250ms ease
    &:after
      background: #4CD784  url('../../../assets/image/check.svg') center no-repeat
      position: absolute
      box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -4px -2px 8px #FFFFFF
      opacity: 0
  & p
    font-size: 1.4rem
    color: #363C46
    font-weight: 500
.confirm
  font-size: 1.4rem
  margin: 17px 10px 30px
//Активный блок 
.currencySelectionActive
  & .inp_block:nth-child(1) .inp_img,
  & .inp_block:nth-child(2) .inp_img
    bottom: 79px
@media screen and (max-width: 1200px)
  .currency_exchange .exchange_title
    padding: 0px 20px 0
  .form_exchange
    padding: 0px 10px 0
  .inp_block
    font-size: 1.3rem
    margin-bottom: 20px
    & input
      font-size: 1.6rem
      padding: 14px 38px 9px 15px
    & .inp_img
      bottom: 37px
    & .account_img
      bottom: 9px

@media screen and (max-width: 1024px)
  .form_exchange label
    width: 100%
</style>