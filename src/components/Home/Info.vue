<template>
  <section class="info">
    <div class="container">
      <div class="info_box">
        <div class="info_block" :class="{reviewsActiv}">
          <h2 class="title_heading" @click="reviewsToggle">Отзывы</h2>
          <div class="info_list">
            <div class="info_item" v-for="info_item in reviews" :key="info_item.id">
              <div class="item_title">
                <a href="#">{{ info_item.title }}</a>
                <span>2 дня назад</span>
              </div>
              <p>{{ info_item.descr }}</p>
            </div>
          </div>
          <button class="green_btn text-copy-btngreen">Читать все отзывы</button>
        </div>
        <div class="info_block" :class="{newsActiw}">
          <h2 class="title_heading" @click="newsToggle ">Новости</h2>
          <div class="info_list">
            <div class="info_item" v-for="info_item in news" :key="info_item.id">
              <div class="item_title">
                <a href="#">{{ info_item.title }}</a>
              </div>
              <p>{{ info_item.descr }}</p>
            </div>
          </div>
          <button class="green_btn text-copy-btngreen">Читать все отзывы</button>
        </div>
        <div class="info_block" :class="{blogActiv}">
          <h2 class="title_heading" @click="blogToggle">Блог</h2>
          <div class="info_list">
            <div class="info_item" v-for="info_item in blog" :key="info_item.id">
              <div class="item_title">
                <a href="#">{{ info_item.title}}</a>
              </div>
              <p>{{ info_item.descr}}</p>
            </div>
          </div>
          <button class="green_btn text-copy-btngreen">Читать все отзывы</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      reviewsActiv: true,
      newsActiw: false,
      blogActiv: false,
      reviews: [
        {
          title: "Антон",
          descr:
            "Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову"
        },
        {
          title: "Петя",
          descr:
            " Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились"
        },
        {
          title: "Геня",
          descr:
            " Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах."
        },
        {
          title: "Витя",
          descr:
            "Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала"
        }
      ],
      news: [
        {
          title: "Душа моя озарена неземной радостью",
          descr:
            "Как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."
        },
        {
          title: "Я так счастлив, мой друг, так упоен ощущением покоя",
          descr:
            "Что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты."
        },
        {
          title:
            "Когда от милой моей долины поднимается пар и полдневное солнце стоит",
          descr:
            "Над непроницаемой чащей темного леса и лишь редкий луч проскальзывает в его святая святых, а я лежу в высокой траве у быстрого ручья."
        },
        {
          title:
            "Прильнув к земле, вижу тысячи всевозможных былинок и чувствую",
          descr:
            "Эти неисчислимые, непостижимые разновидности червяков и мошек и чувствую близость всемогущего, создавшего нас по своему подобию, веяние вселюбящего."
        }
      ],
      blog: [
        {
          title:
            "Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно",
          descr:
            "Копошились у него перед глазами. «Что со мной случилось?» – подумал он. Это не было сном. Его комната, настоящая"
        },
        {
          title:
            "Разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо",
          descr:
            "Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал"
        },
        {
          title:
            "На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо",
          descr:
            "Протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука. Затем взгляд Грегора устремился в окно"
        },
        {
          title:
            "На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо",
          descr:
            "Протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука. Затем взгляд Грегора устремился в окно"
        }
      ]
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
  margin-right: 20px
  & .green_btn
    display: none
  & .title_heading
    color: #7F848C
    transition: 250ms ease
    cursor: pointer
    &:hover
      color: #363C46
      transition: 250ms ease
  & .info_list
    background: #D9E1E8
    padding: 12px 20px
    border-radius: 8px
  & .info_item
    padding: 12px 0
    position: relative
    border-bottom: 1px solid #C7D0D8
    &:last-child
      border-bottom: 0px
  & .item_title a
    color: #363C46
    font-size: 1.2rem
    display: -webkit-box
    overflow: hidden
    -webkit-line-clamp: 1
    -webkit-box-orient: vertical
    &:hover
      color: #00B047
  & p
    font-size: 1.1rem
    text-overflow: ellipsis
    display: -webkit-box
    overflow: hidden
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
  & span
    display: none

.reviewsActiv,
.newsActiw,
.blogActiv
  transition: 500ms ease
  max-width: 800px
  width: 100%
  &  span
    display: block
  & .green_btn
    outline: none
    display: block
  & .title_heading
    color: #363C46

  & .info_list
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: space-between
    background: #E8EDF1
    padding: 0
  & .info_item
    border-bottom: 0px
    width: 48%
    box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -4px -2px 8px #FFFFFF
    border-radius: 10px
    padding: 18px
    margin: 0 0px 20px
  & .item_title
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 9px
    & a
      font-size: 2.4rem
      color: #363C46
      font-weight: normal
      line-height: 28px
      display: -webkit-box
      overflow: hidden
      -webkit-line-clamp: 1
      -webkit-box-orient: vertical
  & p,
  & span
    font-size: 1.8rem
  & p
    overflow: hidden
    position: relative
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
    line-height: 25px
//btn
.green_btn
  box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -4px -2px 8px #BEFFD8
  border-radius: 8px
  padding: 17.5px 0
  width: 100%
  text-transform: uppercase
  font-size: 1.8rem
@media screen and (max-width: 1200px)
  .reviewsActiv .item_title a, .newsActiw .item_title a, .blogActiv .item_title a
    font-size: 2rem
  .reviewsActiv p, .reviewsActiv span, .newsActiw p, .newsActiw span, .blogActiv p, .blogActiv span
    font-size: 1.6rem
@media screen and (max-width: 992px)
  .reviewsActiv .item_title a, .newsActiw .item_title a, .blogActiv .item_title a
    font-size: 1.6rem
  .reviewsActiv p, .reviewsActiv span, .newsActiw p, .newsActiw span, .blogActiv p, .blogActiv span
    font-size: 1.3rem
  .info_block
    margin-right: 10px
    min-width: 150px
    & .info_item
      padding: 6px 0
    & .info_list
      padding: 8px 15px
  .green_btn
    padding: 12px 0
    font-size: 1.4rem
  .reviewsActiv p, .newsActiw p, .blogActiv p
    line-height: 20px
  .reviewsActiv, .newsActiw, .blogActiv
    & .info_item
      padding: 11px
</style>

