<template>
  <div class="error_page grow">
    <div class="container">
      <div class="error_page_box">
        <div class="error_page_text">
          <p class="error_page_title gamesDaymariusv text-copy-descr">
            Страница не найдена, но мы хотим вам
            <span class="text-copy-green">предложить</span>
          </p>
          <p class="error_page_descr">
            Зарегистрируйтесь в личном кабинеты чтобы в дальнейшем получать
            <span
              class="text-copy-green"
            >скидки</span> на следующие операции
          </p>
          <div class="error_page_img">
            <figure>
              <img src="@/assets/image/404/404.png" alt />
            </figure>
          </div>
          <div class="error_page_link">
            <router-link
              to="#"
              class="green_btn text-copy-btngreen error_page_btn"
            >Зарегистрироваться</router-link>
            <router-link to="/">Вернуться на главную</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="sass">
.error_page_box
    display: flex
    align-items: center
    position: relative
    margin: 200px 0
.error_page_text
    max-width: 650px
    & .error_page_title
        font-size: 3.6rem
        font-weight: 500
        margin-bottom: 10px
    & .error_page_descr
        font-size: 1.8rem
    & span
        font-weight: 500
.error_page_link
    display: flex
    align-items: center
    margin-top: 30px
    & a
        display: block
        width: max-content
        cursor: pointer
    & .error_page_btn
        padding: 17px 20px 15px
        margin-right: 20px
        border-radius: 8px
        text-transform: uppercase
.error_page_img
    position: absolute
    right: 0
    top: 50%
    z-index: -1
    transform: translate(0px, -50%)
    & figure
        max-width: 700px
    & img
        width: 100%
        height: 100%
@media screen and (max-width: 768px)
    .error_page_box
        flex-direction: column
        margin: 60px 0
    .error_page_text
        max-width: 100%
        & .error_page_title
            font-size: 1.8rem
            margin-bottom: 10px
        & .error_page_descr
            font-size: 1.4rem
        & .error_page_link
            flex-direction: column
            & .error_page_btn
                padding: 15px 20px 13px
                margin: 0px 0 15px 0
    .error_page_img
        margin-top: 10px
        position: relative
        top: 0
        transform: translate(0px, 0)
        & figure
            max-width: 300px
            margin: 0 auto
</style>