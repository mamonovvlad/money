<template>
  <div class="payment grow bg-background-main">
    <div class="fon bg-background-descr"></div>
    <div class="container">
      <div class="payment_box shadow_btn_white">
        <div class="payment_block_time bg-background-descr">
          <button
            class="green_btn text-copy-btngreen payment_btn"
          >Проверить статус операции в новом окне</button>
          <div class="time_box">
            <p class="text-copy-descr gamesDaymariusv">Осталось времени на оплату</p>
            <div class="payment_timer">
              <div class="timer_block shadow_btn_white bg-background-descr text-copy-descr">
                <p>12</p>
                <p>минут</p>
              </div>
              <div class="timer_block shadow_btn_white bg-background-descr text-copy-descr">
                <p>52</p>
                <p>секунд</p>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="payment_data">
            <p class="gamesDaymariusv text-copy-descr">Данные заявки</p>
            <div class="data_box">
              <div class="data_block">
                <div class="title_data">Номер заявки:</div>
                <div class="title_descr text-copy-descr">2423812357</div>
              </div>

              <div class="data_block">
                <div class="title_data">Создана:</div>
                <div class="title_descr text-copy-descr">16.03.2020 17:01:35</div>
              </div>

              <div class="data_block">
                <div class="title_data">По курсу:</div>
                <div class="title_descr text-copy-descr">1.00000 = 62.2928</div>
              </div>

              <div class="data_block">
                <div class="title_data">E-mail:</div>
                <div class="title_descr text-copy-descr">tolik.wwwww@ukr.net</div>
              </div>

              <div class="data_block">
                <div class="title_data">Телефон:</div>
                <div class="title_descr text-copy-descr">+380687250152</div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="payment_data">
            <p class="gamesDaymariusv text-copy-descr">Отдаю</p>
            <div class="data_box">
              <div class="data_block">
                <div class="title_data">PerfectMoney USD:</div>
                <div class="title_descr text-copy-descr">80:21 USD</div>
              </div>

              <div class="data_block">
                <div class="title_data">С кошелька:</div>
                <div class="title_descr text-copy-descr">234123581235</div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="payment_data">
            <p class="gamesDaymariusv text-copy-descr">Получаю</p>
            <div class="data_box">
              <div class="data_block">
                <div class="title_data">Яндекс Деньги RUB:</div>
                <div class="title_descr text-copy-descr">5000.24 RUB</div>
              </div>

              <div class="data_block">
                <div class="title_data">На кошелёк:</div>
                <div class="title_descr text-copy-descr">41124012409</div>
              </div>
            </div>
          </div>
        </div>
        <PaymentBlockInfo v-if="paymentBlockInfo" />
        <Completed v-if="completed" />
      </div>
    </div>
  </div>
</template>

<script>
import PaymentBlockInfo from "@/components/Payment/PaymentBlockInfo";
import Completed from "@/components/Payment/Completed";
export default {
  data() {
    return {
      paymentBlockInfo: true,
      completed: false
    };
  },
  components: {
    Completed,
    PaymentBlockInfo
  }
};
</script>

<style lang="sass">
.payment_box
  display: flex
  border-radius: 10px
  overflow: hidden
  margin-bottom: 60px
  & .line
    width: 100%
    height: 2px
    background: #CCD5DD
    margin: 20px 0
.payment_block_time
  max-width: 400px
  width: 100%
  padding: 30px 20px 20px
  & .payment_btn
    padding: 10px 75px
    line-height: 20px
    border-radius: 4px
    width: 100%
    font-size: 1.4rem
.time_box
  display: flex
  & p
    font-size: 2.0rem
    font-weight: bold

.payment_timer
  display: flex
.time_box
  margin: 20px 0 0 0
  & .timer_block
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-end
    position: relative
    border-radius: 4px
    margin: 0px 0  0 20px
    padding: 20px 15px 5px
    height: 100px
    width: 100px
    &:after
      content: ''
      position: absolute
      top: 50%
      width: 100%
      height: 50%
      background: rgba(255,255,255,.3)
    & p:nth-child(1)
      font-size: 6.4rem
      font-weight: bold
      line-height: 40px
    & p:nth-child(2)
      font-weight: normal
      font-size: 1.8rem
      line-height: 1
.payment_data
  & p
    margin-bottom: 10px
    font-size: 2.0rem
    font-weight: bold

.data_block
  display: flex
  align-items: center
  justify-content: space-between
  & .title_data,
  & .title_descr
    font-size: 1.4rem
    margin-bottom: 10px
@media screen and (max-width: 1200px)
  .time_box p
    font-size: 1.8rem
@media screen and (max-width: 1024px)
  .payment_block_time
    max-width: 350px
    & .payment_btn
      padding: 10px 55px
  .time_box
    & .timer_block
      margin: 0px 0 0 15px
      padding: 15px 14px 5px
      height: 90px
      width: 90px
      & p:nth-child(1)
        font-size: 5.4rem
@media screen and (max-width: 992px)
  .payment .scoreboard .scoreboard_box
    & i
      margin-right: 5px
    & button
      font-size: 1.4rem

  .payment_block_time
    max-width: 300px
    padding: 20px 20px 20px
    & .payment_btn
      padding: 10px 30px
  .time_box
    & p
      font-size: 1.4rem
    & .timer_block
      margin: 0px 0 0 10px
      padding: 15px 14px 5px
      height: 73px
      width: 73px
      & p:nth-child(1)
        font-size: 4rem
      & p:nth-child(2)
        font-size: 1.6rem
  .data_box
    & .title_data,
    & .title_descr
      font-size: 1.2rem
      margin-bottom: 5px
  .payment_box .line
    margin: 10px 0
  .payment_data p
    margin-bottom: 6px
    font-size: 1.8rem
@media screen and (max-width: 768px)
  .payment_box
    flex-direction: column
  .payment_block_time
    max-width: 100%
  .time_box
    flex-direction: column
    align-items: center
    & .timer_block
      margin: 10px 10px 0
      height: 100px
      width: 100px
    & .timer_block p:nth-child(1)
      font-size: 6.5rem
    & .timer_block p:nth-child(2)
      font-size: 1.8rem
      margin: 5px 0
@media screen and (max-width: 576px)
  .payment_data p
    font-size: 1.4rem
  .payment_box .line
    margin: 20px 0
</style>