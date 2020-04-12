<template>
  <div class="blog grow bg-background-main">
    <div class="main_text bg-background-descr">
      <h1 class="title text-copy-descr gamesDaymariusv">Блог</h1>
      <p class="descr text-copy-main">Тут текст по типу “Посление события нашего сервиса”</p>
    </div>
    <div class="container">
      <div class="blog_box">
        <div class="blog_items">
          <BlogItems v-for="blog_items in 6" :key="blog_items.index" />
        </div>
        <button class="green_btn text-copy-btngreen show_more">
          <i class="icon-refresh"></i> Показать ещё (15)
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItems from "@/components/Blog/BlogItems";
export default {
  components: {
    BlogItems
  }
};
</script>

<style lang="sass">
.blog_box
    margin: 60px 0
    & .blog_items
        display: flex
        flex-wrap: wrap
        justify-content: center
</style>

