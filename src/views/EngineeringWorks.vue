<template>
  <div class="engineering grow">
    <div class="container">
      <div class="engineering_box">
        <div class="engineering_text">
          <p class="engineering_title gamesDaymariusv text-copy-descr">Ведутся техничекие работы</p>
          <p
            class="engineering_descr"
          >Мы приносим прощение за неудобства, мы скоро вернёмся) Если у вас есть вопросы, вы можете задать им нам на почту hello@7money.co</p>
          <div class="engineering_img">
            <figure>
              <img src="@/assets/image/EngineeringWorks/EngineeringWorks.svg" alt />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="sass">
.engineering
  overflow: hidden
  background: #E8EDF1
  position: relative
  z-index: 0
.engineering_box
  display: flex
  align-items: center
  height: 100vh
.engineering_text
  max-width: 650px
  & .engineering_title
    font-weight: bold
    font-size: 7.2rem
    margin-bottom: 20px
    color: #363C46
  & .engineering_descr
    color: #707579
    font-size: 2.4rem
.engineering_img
  position: absolute
  right: 0px
  max-width: 800px
  width: 100%
  bottom: 0
  z-index: -1
  & figure
    width: 100%
  & img
    width: 100%
    height: 100%
@media screen and (max-width: 768px)
  .engineering_box
    flex-direction: column
    & .engineering_title
      font-size: 2.4rem
      margin: 55px 0 15px
    & .engineering_descr
      font-size: 1.4rem
  .engineering_img
    position: absolute
    right: 0
</style>