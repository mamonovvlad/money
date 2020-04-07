<template>
  <div class="successful grow">
    <div class="fon bg-background-descr"></div>
    <div class="container">
      <div class="successful_box text-copy-descr grow bg-background-main shadow_btn_white">
        <Scoreboard />
        <div class="successful_info">
          <div class="successful_block">
            <p class="successful_title">Поздравляем, перевод средств успешно завершен</p>
            <p
              class="successful_descr"
            >Перевод средств успешно завершен, ожидайте оплату с нашей стороны</p>
            <div class="successful_btn green_btn text-copy-btngreen">Создать новую заявку</div>
          </div>
          <div class="successful_block successful_img">
            <img src="@/assets/image/successful/successful.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Scoreboard from "@/components/Home/Exchange/Scoreboard";
export default {
  data() {
    return {};
  },
  components: {
    Scoreboard
  }
};
</script>


<style lang="sass">
.successful
  margin-bottom: 60px
.successful_box
  padding: 30px 0 60px
  border-radius: 10px
.successful_info
  display: flex
  align-items: center
  justify-content: center
  padding: 0 40px
.successful_block
  max-width: 400px
  &:nth-child(1)
    margin-right: 60px
    & .successful_title
      font-weight: bold
      font-size: 2.4rem
      margin-bottom: 20px
    & .successful_descr
      font-weight: normal
      font-size: 1.8rem
      margin-bottom: 20px
    & .successful_btn
      padding: 16px 60px 14px
      border-radius: 4px
      text-transform: uppercase
      text-align: center
      font-size: 1.8rem
@media screen and (max-width:992px)
  .successful_block .successful_btn
    font-size: 1.6rem
@media screen and (max-width:768px)
  .successful_block
    & .successful_title
      font-size: 2rem
    & .successful_descr
      font-size: 1.4rem
    & .successful_btn
      padding: 14px 50px 12px
      font-size: 1.4rem
@media screen and (max-width:576px)
  .successful_box
    padding: 15px 0 20px
    .successful_info
      flex-direction: column
      padding: 0 15px
      & .successful_img
        order: 0
        margin-bottom: 40px
    .successful_block
      order: 1
      &:nth-child(1)
        margin-right: 0px
        & .successful_title
          font-size: 1.4rem
        & .successful_descr
          font-size: 1.4rem
        & .successful_btn
          padding: 12px 25px 10px
</style>