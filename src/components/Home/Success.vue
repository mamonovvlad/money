<template>
  <section class="success">
    <div class="container">
      <div class="success_box bg-background-main shadow_btn_white">
        <div class="success_block">
          <i class="icon-people text-copy-green"></i>
          <div class="success_text">
            <p class="success_title gamesDaymariusv text-copy-descr">8766</p>
            <p class="success_descr">Человек нам доверяют</p>
          </div>
        </div>
        <div class="success_block">
          <i class="icon-time text-copy-green"></i>
          <div class="success_text">
            <p class="success_title gamesDaymariusv text-copy-descr">7:03</p>
            <p class="success_descr">Среднее время обмена</p>
          </div>
        </div>
        <div class="success_block">
          <i class="icon-arrow text-copy-green"></i>
          <div class="success_text">
            <p class="success_title gamesDaymariusv text-copy-descr">116644</p>
            <p class="success_descr">Успешных обменов</p>
          </div>
        </div>
        <div class="success_block">
          <i class="icon-comments text-copy-green"></i>
          <div class="success_text">
            <p class="success_title gamesDaymariusv text-copy-descr">689</p>
            <p class="success_descr">Отзывов BESTCHANGE</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
//Success
.success_box
  display: flex
  align-items: baseline
  justify-content: space-between
  border-radius: 8px
  overflow: hidden
  & .success_block
    padding: 20px 20px
    display: flex
    align-items: center
    &:hover i,
    &:hover .success_text,
    &:hover .success_title
      color: #fff
      transition: 250ms ease
  & i
    font-size: 4rem
  & img
    margin-right: 20px
  & .success_text
    margin-left: 20px
  & .success_title
    font-weight: bold
    font-size: 3.6rem
@media screen and (max-width: 1200px)
  .success_box .success_title
    font-size: 3rem
  .success_descr
    font-size: 1.4rem
  .success_box .success_block
    padding: 20px 12px
@media screen and (max-width: 1024px)
  .success_box .success_text
    margin-left: 12px
@media screen and (max-width: 992px)
  .success_box
    justify-content: space-evenly
  .success_box .success_text
    margin-left: 5px
  .success_box .success_title
    font-size: 2rem
  .success_descr
    font-size: 1rem
  .success_box i
    font-size: 3rem
  .success_box .success_text
    margin-left: 5px
</style>