<template >
  <div class="blog_item bg-background-main shadow_btn_white">
    <figure class="blog_img">
      <img :src="img" alt />
    </figure>
    <div class="item_box">
      <p class="blog_date">{{ date }}</p>
      <p class="views">
        Просмотров:
        <span>{{ views }}</span>
      </p>
    </div>
    <p class="blog_title text-copy-descr gamesDaymariusv">{{ title }}</p>
    <p class="blog_descr">{{ descr }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      date: "31.09.2019",
      views: "2 921",
      img: "img/item_img.3f1962a3.png",
      title: "Почему 7Money лучшая обменка?",
      descr:
        "Начало текста статьи Начало текста статьи Начало текста статьи.Начало текста статьи Начало текста статьи Начало текста статьи."
    };
  }
};
</script>


<style lang="sass">
.blog_item
  max-width: 380px
  padding: 20px
  margin: 0 10px 20px 10px
  border-radius: 10px
  & figure
    margin-bottom: 20px
    & img
      width: 100%
      height: 100%
  & .blog_title
    font-size: 2.4rem
    font-weight: 500
    margin-bottom: 2px
  & .blog_descr
    font-size: 1.8rem
  & .blog_date,
  & .blog_views
    font-size: 1.4rem

.item_box
  display: flex
  justify-content: space-between
  margin-bottom: 10px
</style>