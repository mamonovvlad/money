<template>
  <div :class="open ? 'answers_info open' : 'answers_info'" @click="$emit('toggleOpen', index)">
    <div class="answers_accordion bg-background-main shadow_btn_white">
      <div class="accordion_title">{{ info.title}}</div>
      <div class="accordion_descr text-copy-descr">{{ info.descr}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "index", "open"]
};
</script>

<style lang="sass">
.answers_accordion
  padding: 20px
  margin-bottom: 20px
  border-radius: 8px
  & .accordion_title
    position: relative
    font-weight: normal
    font-size: 2.4rem
    transition: all 0.4s linear
    &:after
      content: ''

      position: absolute
      top: 50%
      right: 0
      transform: translateY(-50%) rotate(0deg)

      width: 20px
      height: 20px
      background: url(../../assets/image/arrow.svg) center no-repeat
      transition: all 0.4s linear

  & .accordion_descr
    font-size: 1.8rem
    opacity: 0
    max-height: 0px
    overflow-y: hidden
    transition: all 0.4s ease
.open
  & .answers_accordion
    box-shadow: inset 3px 3px 3px rgba(136, 165, 191, 0.48), inset -3px -3px 3px #FFFFFF
  & .accordion_title
    margin-bottom: 15px
    color: #363C46
    &:after
      transform: translateY(-50%) rotate(180deg)
  & .accordion_descr
    opacity: 1
    max-height: 1800px
    transition: all 0.4s ease
@media screen and (max-width: 992px)
  .answers_accordion
    padding: 15px 20px
    & .accordion_title
      font-size: 2rem
@media screen and (max-width: 768px)
  .answers_box
    & .answers_accordion
      padding: 12px 12px
    & .answers_items
      margin-right: 0px
    & .accordion_title
      font-size: 1.4rem
    & .accordion_descr
      font-size: 1.2rem
.open .accordion_title
  margin-bottom: 10px
</style>