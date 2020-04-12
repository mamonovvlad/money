<template>
  <div class="error grow bg-background-main">
    <div class="fon bg-background-descr"></div>
    <div class="container">
      <div class="error_box text-copy-descr grow bg-background-main shadow_btn_white">
        <Scoreboard />
        <div class="error_info">
          <div class="error_block">
            <p class="error_title">Ошибка, заявка не прошла</p>
            <p
              class="error_descr"
            >Извините при оплате с Вашей стороны, что-то пошло не так. Напишите нам в онлайн чат, либо создайте новую заявку</p>
            <div class="error_btn green_btn text-copy-btngreen">Создать новую заявку</div>
          </div>
          <div class="error_block error_img">
            <img src="@/assets/image/Error/Error.svg" alt />
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
.error
  padding-bottom: 60px
.error_box
  padding: 30px 0 60px
  border-radius: 10px
.error_info
  display: flex
  align-items: center
  justify-content: center
  padding: 0 40px
.error_block
  max-width: 400px
  &:nth-child(1)
    margin-right: 60px
    & .error_title
      font-weight: bold
      font-size: 2.4rem
      margin-bottom: 20px
    & .error_descr
      font-weight: normal
      font-size: 1.8rem
      margin-bottom: 20px
    & .error_btn
      padding: 16px 60px 14px
      border-radius: 4px
      text-align: center
      text-transform: uppercase
      font-size: 1.8rem
@media screen and (max-width:992px)
  .error_block .error_btn
    font-size: 1.6rem
@media screen and (max-width:768px)
  .error_block
    & .error_title
      font-size: 2rem
      & .error_descr
        font-size: 1.4rem
        & .error_btn
          padding: 14px 50px 12px
          font-size: 1.4rem
@media screen and (max-width:576px)
  .error_box
    padding: 15px 0 20px
    .error_info
      flex-direction: column
      padding: 0 15px
      & .error_img
        order: 0
        margin-bottom: 40px
    .error_block
      order: 1
      &:nth-child(1)
        margin-right: 0px
        & .error_title
          font-size: 1.4rem
        & .error_descr
          font-size: 1.4rem
        & .error_btn
          padding: 12px 25px 10px
</style>