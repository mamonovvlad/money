<template>
  <div class="scoreboard bg-background-descr">
    <button class="scoreboard_arrow shadow_btn_white  bg-background-descr">
      <i class="icon-arrow-1 text-copy-descr"></i>
    </button>
    <div class="scoreboard_box">
      <button class="bg-background-descr">
        <i class="icon-datainput text-copy-main"></i>
        <p class="text-copy-main">Ввод данных</p>
      </button>
      <button class="bg-background-descr">
        <i class="icon-payment text-copy-main"></i>
        <p class="text-copy-main">Оплата</p>
      </button>
      <button class="bg-background-descr">
        <i class="icon-completion text-copy-main"></i>
        <p class="text-copy-main">Завершение</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.scoreboard
  display: flex
  margin: 0 40px 30px
  padding: 17px 35px
  border-radius: 8px
  justify-content: space-between
  align-items: center
  position: relative
  z-index: 1
  & .scoreboard_arrow
    border-radius: 4px
    min-width: 40px
    height: 40px
    position: relative
    outline: none
    display: none
    & i
      font-size: 1.5rem
  & .scoreboard_box
    display: flex
    justify-content: space-between
    width: 100%
    &:after
      content: ''
      position: absolute
      border: 2px dashed #C9D4DE
      left: 60px
      right: 60px

      z-index: -1
      top: 50%
      transform: translate(0px, -50%)
    & button
      display: flex
      align-items: center
      padding: 0 15px
      font-weight: 400
      font-size: 1.8rem
      transition: 250ms

      & i
        font-size: 2.5rem
        margin-right: 15px
.scoreboardActive
  color: #363C46
  transition: 250ms
  & i
    color: #00B047
    transition: 250ms
@media screen and (max-width: 768px)
  .scoreboard
    padding: 15px 15px
    & button
      padding: 0px 0px
      font-size: 1.4rem
@media screen and (max-width: 576px)
  .scoreboard
    justify-content: flex-start
    margin: 0px 15px 30px 15px
    & .scoreboard_box
      &:after
        content: ''
        position: absolute
        border: 1px dashed #C9D4DE
        left: 75px
    & .scoreboard_arrow
      display: block
      margin-right: 10px
    & .scoreboard_box button
      padding: 0 5px
      & i
        margin-right: 0px
        font-size: 3rem
    & button p
      display: none
</style>