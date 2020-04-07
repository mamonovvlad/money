<template>
  <div class="status_check bg-background-main grow">
    <div class="container">
      <div class="status_check_box">
        <div class="status_check_block shadow_btn_white">
          <div class="status_check_info">
            <div class="status_check_info_text">
              <p
                class="status_check_info_title gamesDaymariusv text-copy-green"
                v-if="applicationCompleted"
              >Ваша Заявка Выполнена</p>
              <p
                v-if="pendingReceipt"
                class="status_check_info_title text-copy-blue gamesDaymariusv text-copy-green"
              >Ожидание поступления Bitcoin и 1го подтверждения</p>
              <p
                v-if="waitingPayment"
                class="status_check_info_title text-copy-blue gamesDaymariusv text-copy-green"
              >Ожидание оплаты клиентом</p>
              <p
                v-if="queueRequest"
                class="status_check_info_title text-copy-blue gamesDaymariusv text-copy-green"
              >Ваша Заявка в очереди на выплату</p>
              <div class="status_check_info_request">
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
            <div class="status_check_info_currency shadow_btn_white_active">
              <ul>
                <li>
                  <div class="status_check_currency_name">
                    <img src="@/assets/image/home/currency/24UAH.svg" alt />
                    <p>Отдаю:</p>
                  </div>
                  <div class="status_check_currency_text text-copy-descr">0.015 BTC</div>
                </li>
                <li>
                  <div class="status_check_currency_name">
                    <img src="@/assets/image/home/currency/exmo.svg" alt />
                    <p>Получаю:</p>
                  </div>
                  <div class="status_check_currency_text text-copy-descr">9 124537,29 ₽</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="line bg-background-descr"></div>
          <div class="status_check_text">
            <p>
              <i class="icon-credit-card text-copy-main"></i> Выплата поступила в размере:
              <span class="text-copy-descr">0.015 BTC</span>
            </p>
            <p>
              <i class="icon-check-1 text-copy-main"></i> Подтверждения в сети Bitcoin:
              <span class="text-copy-descr">1 из 1 требуемого</span>
            </p>
            <p>
              <i class="icon-castle text-copy-main"></i> Ваш TXID:
              <span class="text-copy-descr">sdfasdhfashdgalskjdhgaslkjghaslk</span>
              <button class="icon-vector text-copy-green"></button>
            </p>
            <p class="text-copy-descr">
              <i class="icon-time-1 text-copy-main"></i> Обычно выплата производится в течении
              <span>5-30 минут</span> после 1-го подтверждения
            </p>
          </div>
        </div>
        <transition name="fade">
          <div class="status_check_thanks shadow_btn_white bg-background-main" v-if="thanks">
            <button class="status_check_thanks_close" @click="thanks = false">
              <i class="icon-cancel"></i>
            </button>
            <div class="thanks_text">
              <img src="@/assets/image/payment/thanks.svg" alt />
              <p>
                <span class="text-copy-descr">Благодарим</span> за использование нашего сервиса! Уважаемый клиент, если Вам понравилось обслуживание нашего сервиса, Вы можете
                <span
                  class="text-copy-descr"
                >оставить отзыв здесь:</span>
              </p>
            </div>
            <div class="box_btn thanks_btn">
              <button class="green_btn text-copy-btngreen status_check_btn">Оставить отзыв</button>
              <p class="link_home">
                Либо на нашем
                <router-link class="text-copy-green" to="/">сайте</router-link>
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      applicationCompleted: true,
      pendingReceipt: false,
      waitingPayment: false,
      queueRequest: false,
      thanks: true
    };
  }
};
</script>


<style lang="sass">
.line
    width: 100%
    height: 1px
    margin: 20px 0
.status_check
    margin: 30px 0px
    width: 100%
    display: flex
    align-items: center
.status_check_box
    display: flex
    justify-content: center
.status_check_block
    max-width: 820px
    padding: 30px
    width: 100%
    border-radius: 8px
.status_check_info
    display: flex
    justify-content: space-between
.status_check_info_currency
    padding: 20px 20px 5px
    border-radius: 4px
    max-width: 300px
    height: max-content
    width: 100%
    & li
        display: flex
        align-items: center
        justify-content: space-between
        margin: 0 0px 15px 0px
    & .status_check_currency_name
        display: flex
        align-items: center
    & p
        font-size: 1.8rem
        line-height: 1
        margin-left: 5px
    & .status_check_currency_text
        font-weight: 500
        font-size: 1.8rem
.status_check_info_text
    margin-right: 10px
    width: 100%
    & .status_check_info_title
        font-weight: bold
        font-size: 2.0rem
        margin-bottom: 20px
    &
.status_check_info_request
    display: flex
    justify-content: space-between
    & p
        font-size: 1.4rem
    &:nth-child(1)
        margin-right: 20px
    & span
        font-weight: 500
.status_check_text
    margin-bottom: 30px
    & i
        font-size: 1.8rem
        margin-right: 5px
    & p
        font-size: 1.6rem
        margin-bottom: 15px
        font-weight: 400
    & button
        outline: none
        border: none
        margin-left: 5px
        transform: translate(0px, -2px)
    & span
        font-weight: 500
.status_check_thanks
    max-width: 400px
    width: 100%
    padding: 30px
    border-radius: 8px
    height: max-content
    margin-left: 20px
    transition: 0.5s ease
    & .thanks_text
        display: flex
        flex-direction: column
        margin-bottom: 20px
    & p
        font-size: 1.4rem
    & span
        font-weight: 500

    & img
        max-width: 225px
        width: 100%
    & .thanks_btn
        display: flex
        flex-direction: column
    & .status_check_btn
        padding: 15px 10px 13px
        text-transform: uppercase
        font-size: 1.8rem
        border-radius: 4px
        margin-bottom: 20px
    & .link_home
        font-size: 1.4rem
.status_check_thanks_close
    position: absolute
    right: 8px
    top: 8px
    cursor: pointer
    z-index: 1
    display: none
.fade-enter-active,
.fade-leave-active
    transition: opacity .5s

.fade-enter,
.fade-leave-to
    opacity: 0

@media screen and (max-width: 1200px)
    .status_check_info_currency
        max-width: 250px
        padding: 15px 15px 0px
        & li .status_check_currency_name p,
        & li .status_check_currency_text
            font-size: 1.6rem
    .status_check_thanks
        max-width: 330px
@media screen and (max-width: 1024px)
    .status_check_info_currency
        max-width: 100%
    .status_check_info
        flex-direction: column
    .status_check_info_text
        margin: 0px 0 10px 0
        width: 100%
    .status_check_text
        margin-bottom: 15px
        & p
            font-size: 1.4rem
            margin-bottom: 15px
    .status_check_thanks .thanks_text
        flex-direction: column
        & img
            margin-top: 10px
@media screen and (max-width: 768px)
    .status_check_thanks_close
        display: block
    .status_check_text button
        margin-left: 10px
        transform: translate(0px, 0px)
        padding: 5px
        box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -2px -1px 2px #FFFFFF
        border-radius: 2px
    .status_check_thanks
        position: absolute
        margin: 0
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 15
        & .status_check_btn
            font-size: 1.4rem
    .link_home
        text-align: center
@media screen and (max-width: 576px)
    .status_check_info_text .status_check_info_title
        margin-bottom: 10px
    .status_check_info_currency li .status_check_currency_name p, .status_check_info_currency li .status_check_currency_text
        font-size: 1.4rem
    .status_check_block
        padding: 20px 12px
    .status_check_thanks
        max-width: 270px
    .status_check_info_text .status_check_info_title
        font-size: 1.4rem
    .status_check_info_request p
        font-size: 1.2rem
        &:nth-child(1)
            margin-right: 0px
    .status_check_text
        & i
            display: none
        & p
            font-size: 1.4rem
            margin-bottom: 10px
    .status_check_thanks
        padding: 15px
</style>
