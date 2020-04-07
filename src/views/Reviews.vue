<template>
  <div class="reviews grow">
    <div class="main_text bg-background-descr">
      <h1 class="title text-copy-descr gamesDaymariusv">Отзывы</h1>
      <p class="descr text-copy-main">Тут текст по типу “Посление события нашего сервиса”</p>
    </div>
    <div class="container">
      <div class="reviews_box">
        <div class="reviews_items">
          <ReviewsItems v-for="reviews_items in 12" :key="reviews_items.index" />
        </div>
        <div class="reviews_btn">
          <button class="green_btn text-copy-btngreen show_more">
            <i class="icon-refresh"></i> Показать ещё (15)
          </button>
          <button class="green_btn text-copy-btngreen show_more">Смотерть отзывы на Bestchange</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ReviewsItems from "@/components/Reviews/ReviewsItems";
export default {
  data() {
    return {};
  },
  components: {
    ReviewsItems
  }
};
</script>


<style lang="sass">
.reviews_box
  margin: 60px 0
.reviews_btn
  display: flex
.reviews_btn
  justify-content: center
  & button
    margin: 0 10px
    text-transform: uppercase
    &:nth-child(2)
      background: transparent
      border: 2px solid #00B047
      color: #00B047
</style>