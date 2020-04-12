<template>
  <div class="status_page grow bg-background-main">
    <div class="main_text bg-background-descr">
      <h1 class="title text-copy-descr gamesDaymariusv">Проверить статус операции</h1>
      <p
        class="descr text-copy-main"
      >Тут текст по типу “Здесь вы можете проверить статус вшаей операции”</p>
    </div>
    <div class="container">
      <div class="status_page_box">
        <form class="status_page_form bg-background-main shadow_btn_white" action>
          <label class="text-copy-descr" for="operation">Введите номер операции</label>
          <input
            class="shadow_btn_white_active bg-background-main"
            id="operation"
            type="number"
            placeholder="1201205225"
          />
          <button class="green_btn text-copy-btngreen">Проверить</button>
        </form>
        <div class="status_page_img">
          <figure>
            <img src="@/assets/image/status/status_img.svg" alt />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="sass">
.status_page_box
  display: flex
  align-items: center
  margin: 80px 0
  position: relative
  z-index: 0
.status_page_form
  display: flex
  flex-direction: column
  padding: 60px 65px
  & label
    font-weight: bold
    font-size: 3.6rem
    margin-bottom: 30px
  & input
    font-size: 2.4rem
    padding: 15px 20px 13px
    border-radius: 4px
    margin-bottom: 30px
    &[type='number']
      -moz-appearance: textfield
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
  & button
    padding: 15px 20px 13px
    border-radius: 8px
    font-size: 1.8rem
.status_page_img
  position: absolute
  right: 0
  bottom: 0
  & figure
    max-width: 600px
@media screen and (max-width: 1200px)
  .status_page_form
    padding: 40px 40px
    & label
      font-size: 3rem
  .status_page_img figure
    max-width: 500px
@media screen and (max-width: 992px)
  .status_page_form
    padding: 30px 30px
    & label
      margin-bottom: 20px
      font-size: 2.4rem
    & input
      font-size: 2rem
      margin-bottom: 20px
  .status_page_img figure
    max-width: 400px
@media screen and (max-width: 768px)
  .status_page_box
    flex-direction: column
  .status_page_img
    position: relative
    bottom: 15px
@media screen and (max-width: 576px)
  .status_page_box
    margin: 30px 0
  .status_page_form
    padding: 20px 15px
    & label
      text-align: center
    & input
      font-size: 1.8rem
    & button
      font-size: 1.4rem
</style>