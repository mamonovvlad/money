<template>
  <div class="news grow">
    <div class="main_text bg-background-descr">
      <h1 class="title text-copy-descr gamesDaymariusv">Новости</h1>
      <p class="descr text-copy-main">Тут текст по типу “Посление события нашего сервиса”</p>
    </div>
    <div class="container">
      <div class="news_box">
        <div class="news_list">
          <NewsItems v-for="news_list in 60" :key="news_list.index" />
        </div>
        <button class="green_btn text-copy-btngreen show_more">
          <i class="icon-refresh"></i> Показать ещё (15)
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItems from "@/components/News/NewsItems";
export default {
  components: {
    NewsItems
  }
};
</script>



<style lang="sass">
.news_box
  margin: 60px 0
  & .line
    width: 100%
    height: 1px
    background: #D9E1E8
    margin: 10px 0
.news_list
  display: flex
  flex-wrap: wrap
  justify-content: center
.news_item
  border-radius: 10px
  padding: 20px 30px 40px
  margin: 0 10px 20px 10px
  max-width: 380px
  width: 100%
  & .news_title
    font-weight: 500
    font-size: 2.2rem
    margin-bottom: 5px
  & .news_date,
  & .news_descr
    font-size: 1.3rem

@media screen and (max-width:768px)
  .news_box
    margin: 40px 0
  .news_item
    padding: 12px 8px 18px
    margin: 0 0px 20px 0px
    & .news_title
      font-size: 1.8rem
    & .news_date,
    & .news_descr
      font-size: 1.2rem
</style>