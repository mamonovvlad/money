<template>
  <div class="completed bg-background-main">
    <div class="completed_info">
      <div class="completed_info_text">
        <p class="completed_info_title gamesDaymariusv text-copy-green">Ваша Заявка Выполнена</p>
        <div class="completed_info_request">
          <p>
            Дата заявки:
            <span class="text-copy-descr">22.02.2018</span>
          </p>
          <p>
            Статус операции:
            <span class="text-copy-descr">412741248</span>
          </p>
        </div>
      </div>
      <div class="completed_info_currency shadow_btn_white_active">
        <ul>
          <li>
            <div class="completed_currency_name">
              <img src="@/assets/image/home/currency/24UAH.svg" alt />
              <p>Отдаю:</p>
            </div>
            <div class="completed_currency_text text-copy-descr">0.015 BTC</div>
          </li>
          <li>
            <div class="completed_currency_name">
              <img src="@/assets/image/home/currency/exmo.svg" alt />
              <p>Получаю:</p>
            </div>
            <div class="completed_currency_text text-copy-descr">9 124537,29 ₽</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
    <div class="completed_text">
      <p>
        Выплата поступила в размере:
        <span class="text-copy-descr">0.015 BTC</span>
      </p>
      <p>
        Подтверждения в сети Bitcoin:
        <span class="text-copy-descr">1 из 1 требуемого</span>
      </p>
      <p>
        Ваш TXID:
        <span class="text-copy-descr">sdfasdhfashdgalskjdhgaslkjghaslk</span>
        <button class="icon-vector text-copy-green"></button>
      </p>
      <p class="text-copy-descr">
        Обычно выплата производится в течении
        <span>5-30 минут</span> после 1-го подтверждения
      </p>
    </div>
    <div class="completed_thanks bg-background-main">
      <div class="thanks_text">
        <p>
          <span class="text-copy-descr">Благодарим</span> за использование нашего сервиса! Уважаемый клиент, если Вам понравилось обслуживание нашего сервиса, Вы можете
          <span
            class="text-copy-descr"
          >оставить отзыв здесь:</span>
        </p>
        <img src="@/assets/image/payment/thanks.svg" alt />
      </div>
      <div class="box_btn thanks_btn">
        <button class="green_btn text-copy-btngreen">Оставить отзыв на BESTCHANGE</button>
        <button class="cancel_btn">Либо на нашем сайте</button>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.completed
  padding: 30px 40px
  width: 100%
.completed_info
  display: flex
  justify-content: space-between
  align-items: center
.completed_info_currency
  padding: 20px 20px 5px
  border-radius: 4px
  max-width: 300px
  width: 100%
  & li
    display: flex
    align-items: center
    justify-content: space-between
    margin: 0 0px 15px 0px
    & .completed_currency_name
      display: flex
      align-items: center
      & p
        font-size: 1.8rem
        line-height: 1
        margin-left: 5px
    & .completed_currency_text
      font-weight: 500
      font-size: 1.8rem
.completed_info_text
  margin-right: 10px
  & .completed_info_title
    font-weight: bold
    font-size: 2.0rem
    margin-bottom: 20px
.completed_info_request
  display: flex
  & p
    font-size: 1.4rem
    &:nth-child(1)
      margin-right: 20px
    & span
      font-weight: 500
.completed_text
  margin-bottom: 30px
  & p
    font-size: 1.6rem
    margin-bottom: 20px
    font-weight: 400
    & button
      outline: none
      border: none
      margin-left: 5px
      transform: translate(0px, -2px)
    & span
      font-weight: 500
.completed_thanks
  padding: 30px
  border-radius: 8px
  & .thanks_text
    display: flex
    margin-bottom: 20px
    & p
      font-size: 1.3rem
      & span
        font-weight: 500

    & img
      max-width: 225px
      width: 100%
  & .thanks_btn
    & button
      line-height: 1
      font-size: 1.3rem
@media screen and (max-width: 1200px)
  .completed
    padding: 20px 20px
  .completed_info_currency
    max-width: 250px
    padding: 15px 15px 0px
    & li .completed_currency_name p,
    & li .completed_currency_text
      font-size: 1.6rem
@media screen and (max-width: 1024px)
  .completed_info_currency
    max-width: 100%
  .completed_info
    flex-direction: column
  .completed_info_text
    margin: 0px 0 10px 0
    width: 100%
  .completed_text
    margin-bottom: 15px
    & p
      font-size: 1.4rem
      margin-bottom: 15px
  .completed_thanks .thanks_text
    flex-direction: column
    & img
      margin-top: 10px
@media screen and (max-width: 576px)
  .completed_info_text .completed_info_title
    font-size: 1.4rem
  .completed_info_request p
    font-size: 1.2rem
    &:nth-child(1)
      margin-right: 0px
  .completed_text p
    font-size: 1.2rem
    margin-bottom: 10px
  .completed_thanks
    padding: 15px
</style>
