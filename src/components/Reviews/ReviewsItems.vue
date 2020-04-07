<template >
  <div class="reviews_item bg-background-main shadow_btn_white">
    <div class="item_box">
      <p class="reviews_title text-copy-descr gamesDaymariusv">{{ title }}</p>
      <p class="reviews_date">{{ date }}</p>
    </div>
    <p class="reviews_descr">{{ descr }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Антон",
      descr:
        "Благодарен сервису за успешно и быстро проведенный обмен. Однозначно рекомендую",
      date: "2 дня назад"
    };
  }
};
</script>

<style lang="sass">
.reviews_items
  display: flex
  flex-wrap: wrap
  justify-content: center
  & .reviews_item
    max-width: 380px
    padding: 20px
    margin: 0 10px 20px 10px
  & .reviews_title
    font-size: 2.4rem
    font-weight: 500
  & .reviews_date,
  & .reviews_descr
    font-size: 1.8rem

.item_box
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 10px

@media screen and (max-width: 768px)
  .reviews_items
    & .reviews_item
      border-radius: 10px
      margin: 0 0px 20px 0px
      & .reviews_title
        font-size: 1.8rem
        font-weight: 500
      & .reviews_date,
      & .reviews_descr
        font-size: 1.4rem
</style>