<template>
  <div class="article grow">
    <div class="main_text bg-background-descr">
      <div class="container article_header">
        <div class="article_header_text">
          <h1 class="title text-copy-descr gamesDaymariusv">Что такое майнинг биткоина?</h1>
          <div class="header_text_small">
            <p class="text_small_date">31.09.2019</p>
            <p class="text_small_views">Просмотров: 2 921</p>
          </div>
        </div>
        <div class="article_header_img">
          <img src="@/assets/image/blog/item_img.png" alt />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="article_box">
        <div class="article_info">
          <p class="article_title text-copy-descr gamesDaymariusv">Процесс майнинга Биткоина</p>
          <p class="text-copy-descr article_descr">
            Суть Биткоин майнинга состоит в следующем: устройства, расположенные в разных уголках мира, решают вычислительные задачи, результат которых – виртуальные
            <span>монеты Bitcoin.</span> Безопасность процесса обеспечивается за счет распределенности, нет какого-то одного центра, контролирующего майнинг.
          </p>
          <p
            class="text-copy-descr article_descr"
          >Все осуществляющиеся в сети операции вносятся в своеобразный лог и по очереди передаются майнерам, чья задача – найти среди миллионов возможных комбинаций определенный «хэш», который подойдет ко всем транзакциям, совершенным за последнее время, и особому секретному ключу. Нахождение такого хэша обеспечивает майнеру награду (на текущий момент это 12,5 BTC). получить вознаграждение не так просто, ведь за него одновременно борются тысячи людей. Когда хэш отгадан, блок транзакций закрывается и очередь переходит к последующему.</p>
          <ul class="text-copy-descr article_list">
            <li>В состав хэша блока входят:</li>
            <li>
              <span class="green_dot">•</span> хэш предыдущего блока;
            </li>
            <li>
              <span class="green_dot">•</span> суммарный хэш операций, совершенных пользователями за последние десять минут;
            </li>
            <li>
              <span class="green_dot">•</span> случайное число, изменяемое для того, чтобы результат соответствовал выставленным системой условиям.
            </li>
          </ul>
          <div class="article_gallery">
            <img src="@/assets/image/blog/item_img.png" alt />
            <img src="@/assets/image/blog/item_img.png" alt />
            <img src="@/assets/image/blog/item_img.png" alt />
            <img src="@/assets/image/blog/item_img.png" alt />
            <img src="@/assets/image/blog/item_img.png" alt />
          </div>
          <p class="article_title text-copy-descr gamesDaymariusv">Где продать добытые Биткоины</p>
          <ul class="text-copy-descr article_list">
            <li>С добытыми монетами BTC можно поступить по своему усмотрению:</li>
            <li>
              <span>1.</span> Накапливать и ждать следующего роста криптовалюты. Инвестиционная стратегия, рассчитанная на несколько месяцев или лет.
            </li>
            <li>
              <span>2.</span> Сразу продавать и выводить в фиат. Фиксировать доход полученный от майнинга.
            </li>
            <li>
              <span>3.</span> Увеличить количество коинов, торгуя Биткоином на бирже.
            </li>
          </ul>
          <div class="article_attention text-copy-descr bg-background-main shadow_btn_white">
            <p>Здесь будет отображаться инфа, на которую нужно пределить внимания, Здесь будет отображаться инфа, на которую нужно пределить особенное внимание, Здесь будет отображаться инфа, на которую нужно пределить особенное</p>
          </div>
          <ul class="text-copy-descr article_list">
            <li>С первым вариантом всё понятно: накапливаем криптовалюту в кошельке и ждём «туземун». Хранить намайненное лучше на холодных кошельках, например, Ledger или Trezor. Во втором случае, нужно найти способ как продать Биткоины. Сделать это можно через:</li>
            <li>
              <span>1.</span> Криптобиржи.
            </li>
            <li>
              <span>2.</span> Обменники Биткоина.
            </li>
          </ul>
          <div class="article_share bg-background-main shadow_btn_white">
            <div class="article_share_text">
              <i class="icon-icon text-copy-descr"></i>
              <p class="text-copy-descr">Поделиться с друзяьми в соц сетях:</p>
            </div>
            <div class="article_share_social_network">
              <SocialNetwork />
            </div>
          </div>
        </div>
        <div class="article_sidebar shadow_btn_white bg-background-main">
          <h4 class="text-copy-descr">Популярные статьи</h4>
          <div class="article_popular" v-for="article_popular in 4" :key="article_popular.id">
            <div class="article_popular_box">
              <p class="popular_title">{{ popular_title }}</p>
              <div class="popular_box">
                <p class="popular_date">{{ popular_date }}</p>
                <p class="popular_views">
                  Просмотров:
                  <span>{{ popular_views }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article_slider">
        <p class="article_title text-copy-descr gamesDaymariusv">Вам также будет интересно</p>
        <swiper class="swiper swiper_block" :options="swiperOption">
          <swiper-slide v-for="blog_items in 10" :key="blog_items.index">
            <BlogItems class="article" />
          </swiper-slide>
        </swiper>
        <div class="swiper-button_box">
          <div class="swiper-button-next shadow_btn_white" slot="button-next"></div>
          <div class="swiper-button-prev shadow_btn_white" slot="button-prev"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItems from "@/components/Blog/BlogItems";
import SocialNetwork from "@/components/Header/SocialNetwork";
export default {
  data() {
    return {
      popular_title: "Что такое майнинг биткоина?",
      popular_date: "31.09.2019",
      popular_views: "2 921",
      swiperOption: {
        slidesPerView: 3,
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    SocialNetwork,
    BlogItems
  }
};
</script>


<style lang="sass">
.article
  & .article_title
    font-weight: bold
    font-size: 3.6rem
    margin-bottom: 10px
.article_sidebar
  min-width: 380px
  padding: 20px 20px 5px 20px
  border-radius: 8px
  height: max-content
  margin-left: 20px
  & h4
    font-weight: bold
    font-size: 2.4rem
    margin-bottom: 5px
.article_popular
  border-bottom: 1px solid #D9E1E8
  &:last-child
    border-bottom: 0px

.article_popular_box
  padding: 10px
  border-radius: 8px
  cursor: pointer
  transition: 0.4s ease
  margin: 10px 0
  &:hover
    transition: 0.4s ease
    box-shadow: inset 3px 3px 3px rgba(136, 165, 191, 0.48), inset -3px -3px 3px #FFFFFF
    & .popular_title
      color: #00B047
  & .popular_title
    font-weight: 500
    font-size: 1.8rem
    margin-bottom: 10px
  & .popular_box
    display: flex
    justify-content: space-between
    font-weight: normal
    font-size: 1.4rem
    & span
      font-weight: 400

.article_header
  display: flex
  align-items: center
  justify-content: space-between
  & .title
    text-align: left
    margin-bottom: 50px
  & .header_text_small
    display: flex
    margin-bottom: 15px
    & p
      font-size: 1.4rem
    & .text_small_date
      margin-right: 30px
  & .article_header_img
    max-width: 400px
    width: 100%
.article_box
  padding: 40px 0 60px
  display: flex
  & p, li, i
    font-size: 1.8rem
  & span
    font-weight: 600
.article_list
  margin: 15px 0
  & .green_dot
    color: #00B047
.article_gallery
  margin-bottom: 5px
  display: flex
  flex-wrap: wrap
  & img
    max-width: calc( 33.33% - 15px)
    margin: 0 15px 15px 0
    &:nth-child(1),
    &:nth-child(2)
      max-width: calc( 50% - 15px )
      width: 100%

.article_attention
  position: relative
  padding: 20px
  border-radius: 5px 8px
  &:before,
  &:after
    content: ""
    position: absolute
    width: 21px
    height: 20px
    z-index: 1
  &:before
    top: 0
    left: 0
    background: url(../assets/image/top_arrow.svg) center no-repeat
  &:after
    bottom: 0
    right: 0
    background: url(../assets/image/bottom_arrow.svg) center no-repeat
.article_share
  display: flex
  justify-content: space-between
  padding: 15px 25px
  border-radius: 8px
.article_share_text
  display: flex
  align-items: center
  & i
    margin-right: 10px
.article_share
  margin-top: 30px
.article_share_social_network a
  margin-left: 15px
.article_slider
  margin-bottom: 50px
  position: relative
.swiper-button_box
  position: absolute
  right: 70px
  top: 30px
.swiper_block
  padding: 10px 0 0 0
.swiper-button-prev
  left: -60px
.swiper-button-next
  right: -60px
.swiper-button-prev,
.swiper-button-next
  border-radius: 10px
  width: 50px
  height: 46px
.swiper-button-next:after,
.swiper-button-prev:after
  content: ''
  color: #7F848C
  font-size: 2rem
  font-weight: 600
  width: 50px
  height: 46px
.swiper-button-next:after
  background: url("../assets/image/arrow_slider_right.svg") center no-repeat
.swiper-button-prev:after
  background: url("../assets/image/arrow_slider_left.svg") center no-repeat
@media screen and (max-width: 1200px)
  .article_header .article_header_img
    max-width: 300px
  .article_share
    padding: 15px 10px
  .article_share_text i
    margin-right: 5px
  .article_share_social_network a
    margin-left: 5px
@media screen and (max-width: 1024px)
  .article_sidebar
    min-width: 330px
    padding: 15px 15px 0px 15px
@media screen and (max-width: 992px)
  .article_header .article_header_img
    max-width: 200px
  .article_header .title
    font-size: 2.5rem
  .article_share
    display: flex
    flex-direction: column
    align-items: center
  .article_share_social_network a
    margin: 0 5px
  .article_share_text
    margin-bottom: 15px
    & i
      display: none
  .article_box p, .article_box li, .article_box i
    font-size: 1.6rem
@media screen and (max-width: 768px)
  .article_header .article_header_img
    max-width: 190px
  .article_slider,
  .article_sidebar
    display: none
@media screen and (max-width: 576px)
  .article_header .article_header_img
    max-width: 280px
  .article_box p, .article_box li, .article_box i
    font-size: 1.4rem
  .article .article_title
    font-size: 1.8rem
  .article_header
    flex-direction: column
  .article_header .title
    margin-bottom: 5px
</style>