<template>
  <section class="info">
    <div class="container">
      <div class="info_box">
        <div class="info_block" :class="{reviewsActiv}">
          <h2 class="title_heading gamesDaymariusv text-copy-main" @click="reviewsToggle">Отзывы</h2>
          <div class="info_list">
            <div class="info_items bg-background-descr">
              <ReviewsItems v-for="reviews_item in 4" :key="reviews_item.index" />
              <button class="shadow_btn_white green_btn text-copy-btngreen">Читать все отзывы</button>
            </div>
          </div>
        </div>
        <div class="info_block" :class="{newsActiw}">
          <h2 class="title_heading gamesDaymariusv text-copy-main" @click="newsToggle ">Новости</h2>
          <div class="info_list">
            <div class="info_items bg-background-descr">
              <NewsItems v-for="info_item in 4" :key="info_item.index" />
              <button class="shadow_btn_white green_btn text-copy-btngreen">Читать все отзывы</button>
            </div>
          </div>
        </div>
        <div class="info_block" :class="{blogActiv}">
          <h2 class="title_heading gamesDaymariusv text-copy-main" @click="blogToggle ">Блог</h2>
          <div class="info_list">
            <div class="info_items bg-background-descr">
              <BlogItems v-for="blog_item in 4" :key="blog_item.index" />
              <button class="shadow_btn_white green_btn text-copy-btngreen">Читать все отзывы</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsItems from "@/components/News/NewsItems";
import ReviewsItems from "@/components/Reviews/ReviewsItems";
import BlogItems from "@/components/Blog/BlogItems";
export default {
  name: "Info",
  data() {
    return {
      reviewsActiv: true,
      newsActiw: false,
      blogActiv: false
    };
  },
  methods: {
    reviewsToggle() {
      (this.reviewsActiv = true),
        (this.newsActiw = false),
        (this.blogActiv = false);
    },
    newsToggle() {
      (this.reviewsActiv = false),
        (this.newsActiw = true),
        (this.blogActiv = false);
    },
    blogToggle() {
      (this.reviewsActiv = false),
        (this.newsActiw = false),
        (this.blogActiv = true);
    }
  },
  components: {
    NewsItems,
    ReviewsItems,
    BlogItems
  }
};
</script>

<style lang="sass">
.info
  margin-bottom: 60px
.info_box
  display: flex
.info_block
  transition: 500ms ease
  flex-grow: 1
  min-width: 190px
  max-width: 190px
  &:nth-child(2)
    margin: 0 20px
  & .title_heading
    cursor: pointer
    transition: 0.3s ease
    &:hover
      transition: 0.3s ease
      color: #363C46
  & .line
    display: none
  & .green_btn
    display: none
  & .info_items
    padding: 10px 15px
    border-radius: 8px
  & .reviews_item, .news_item, .blog_item
    box-shadow: unset
    background: transparent
    border-bottom: 1px solid #C7D0D8
    padding: 7px 0
    margin: 0 0px 0 0px
    &:nth-child(4)
      border-bottom: 0px
  & .item_box
    margin-bottom: 0px
  & .reviews_title, .news_title, .blog_title
    font-size: 1.2rem
    font-weight: 500
    font-size: 1.1rem
    margin-bottom: 5px
    display: -webkit-box
    overflow: hidden
    -webkit-line-clamp: 1
    -webkit-box-orient: vertical
    transition: 0.3s ease
    cursor: pointer
    &:hover
      transition: 0.3s ease
      color: #00B047
  & .reviews_date, .news_date, .blog_date, .views, .blog_img
    display: none
  & .reviews_descr, .news_descr, .blog_descr
    font-size: 1.1rem
    display: -webkit-box
    overflow: hidden
    -webkit-line-clamp: 4
    -webkit-box-orient: vertical

.reviewsActiv,
.newsActiw,
.blogActiv
  margin: 0
  transition: 500ms ease
  max-width: 800px
  width: 100%
  & .title_heading
    color: #363C46
  & .info_items
    padding: 0
    margin-right: 0px
    border-radius: unset
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    background: transparent
  & .reviews_item, .news_item, .blog_item
    width: calc(50% - 10px)
    margin: 0 0px 20px 0
    padding: 20px
    border-radius: 10px
    box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -4px -2px 8px #FFFFFF
    background: #E8EDF1
    border-bottom: 0px
  & .reviews_title, .news_title, .blog_title
    font-size: 2.4rem
    font-weight: 500
  & .reviews_date,
  & .reviews_descr, .news_descr, .blog_descr
    font-size: 1.8rem
  & .reviews_descr, .news_descr, .blog_descr
    display: -webkit-box
    overflow: hidden
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
  & .reviews_date,
  & .green_btn
    display: block

//btn
.green_btn
  border-radius: 8px
  padding: 17.5px 0
  width: 100%
  text-transform: uppercase
  font-size: 1.8rem

@media screen and (max-width: 1200px)
  .info_block .reviews_descr, .info_block .news_descr, .info_block .blog_descr
    display: -webkit-box
    overflow: hidden
    -webkit-line-clamp: 3
  .reviewsActiv,
  .newsActiw,
  .blogActiv
    & .reviews_item, .news_item, .blog_item
      margin: 0 0px 16px 0
      padding: 15px
    & .reviews_title, .news_title, .blog_title
      font-size: 2rem
    & .reviews_date,
    & .reviews_descr, .news_descr, .blog_descr
      font-size: 1.6rem
  .green_btn
    padding: 18px 0 14px
    font-size: 1.5rem
@media screen and (max-width: 992px)
  .info_block
    transition: 500ms ease
    flex-grow: 1
    min-width: 140px
    & .reviews_descr, .news_descr, .blog_descr
      display: -webkit-box
      overflow: hidden
      -webkit-line-clamp: 2
    & .info_items
      padding: 7px 9px
  .reviewsActiv,
  .newsActiw,
  .blogActiv
    & .info_items
      padding: 0
    & .reviews_item, .news_item, .blog_item
      margin: 0 0px 16px 0
      padding: 15px
    & .reviews_title, .news_title, .blog_title
      font-size: 1.8rem
      margin-bottom: 3px
    & .reviews_date,
    & .reviews_descr, .news_descr, .blog_descr
      font-size: 1.4rem
</style>

