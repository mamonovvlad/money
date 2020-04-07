<template>
  <div class="payment_block_info bg-background-main bg-background-main">
    <Scoreboard />
    <div class="info_box text-copy-descr">
      <p class="info_title gamesDaymariusv text-copy-descr">Порядок действий</p>
      <p class="info_descr">
        После нажатия на кнопку
        <a href="#">“Перейти к оплате”</a> Вас перенаправит на мерчант платежной системы, для оплаты заявки.
      </p>
      <p
        class="info_descr"
      >После успешной оплаты Вы сможете посмотреть статус платежа по вашей заявке Оплату с нашей стороны мы производим в ручном режиме, время оплаты от 3 до 30 минут.</p>
      <p
        class="text_border"
      >Практически всегда зачисление средств со стороны PerfectMoney происходит сразу, кроме случаев дополнительной проверки со стороны их Службы Безопасности (hold). Как только средства будут нами получены, заявка будет выполнена максимально быстро.</p>
      <form class="payment_form" action>
        <label for>Введите EXMO code RUB для осуществления оплаты Вашей заявки</label>
        <div class="form_box" v-if="formBox">
          <input
            class="bg-background-main shadow_btn_white_active"
            type="text"
            placeholder="EX-code"
          />
          <button class="green_btn text-copy-btngreen payment_btn">Ввести код</button>
        </div>
        <div class="processing_time bg-background-main shadow_btn_white">
          <img src="@/assets/image/payment/clock.svg" alt />
          <div class="processing_time_box">
            <p class="processing_time_title">Время обработки заявки занимает от 5 до 30-ти минут</p>
            <p class="processing_time_descr">Все операции мы проводим вручную</p>
          </div>
        </div>
        <div class="box_btn">
          <button class="cancel_btn">Отменить операцию</button>
          <button class="green_btn text-copy-btngreen">Перейти к оплате</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Scoreboard from "@/components/Home/Exchange/Scoreboard";
export default {
  data() {
    return {
      formBox: true
    };
  },
  components: {
    Scoreboard
  }
};
</script>
<style lang="sass">
.payment_block_info
  width: 100%
  padding-top: 30px
.info_box
  padding: 0 40px 60px
  font-weight: normal
  font-size: 1.4rem
  & .info_title
    font-weight: bold
    font-size: 2.0rem
    margin-bottom: 15px
  & .info_descr
    & a
      font-weight: bold
  & .text_border
    margin: 20px 0
    padding: 20px
    border: 1px dashed #EB5757
    border-radius: 8px
.payment_form
  & label
    display: flex
    font-weight: 500
    margin-bottom: 15px
.form_box
  display: flex
  margin-bottom: 20px
  & input
    font-size: 1.8rem
    padding: 12px 20px
    border-radius: 4px
    width: 100%
    margin-right: 20px
  & button
    outline: none
    border-radius: 4px
    max-width: 150px
    font-size: 1.4rem
    width: 100%
.processing_time
  padding: 20px
  display: flex
  border-radius: 8px
  margin-bottom: 20px
  & img
    margin-right: 20px
  & .processing_time_title
    font-weight: 500
.box_btn
  display: flex
  & button
    width: 100%
    padding: 17px 16px 15px
    font-size: 1.8rem
    border-radius: 4px
    outline: none
    text-transform: uppercase
    &:nth-child(1)
      margin-right: 20px
  & .cancel_btn
    border: 2px solid #7F848C
    color: #7F848C
@media screen and (max-width: 1200px)
  .payment_block_info .scoreboard
    padding: 17px 12px
  .box_btn
    display: flex
    & button
      font-size: 1.5rem
@media screen and (max-width: 1024px)
  .scoreboard button
    font-size: 1.6rem
@media screen and (max-width: 992px)
  .payment_block_info
    padding-top: 20px
  .payment_block_info .scoreboard
    margin: 0 20px 20px
  .info_box
    padding: 0 20px 40px
  .box_btn button
    font-size: 1.3rem
    padding: 17px 9px 15px
  .scoreboard button
    padding: 0 5px
@media screen and (max-width: 576px)
  .info_box
    font-size: 1.2rem
    padding: 0 15px 40px
    & .info_title
      font-size: 1.4rem
      margin-bottom: 10px
    & .text_border
      margin: 20px 0
      padding: 15px
  .processing_time
    flex-direction: column
    padding: 10px
    & img
      margin: 0 0 10px 0
    & .processing_time_title
      margin-bottom: 5px
  .processing_time_box
    text-align: center
  .box_btn
    flex-direction: column
    & button:nth-child(1)
      margin: 0px 0 15px 0
  .form_box
    flex-direction: column
    align-items: center
    & input
      margin: 0 0 15px 0
    & .payment_btn
      max-width: 100%
      padding: 12px 10px 10px 12px
</style>