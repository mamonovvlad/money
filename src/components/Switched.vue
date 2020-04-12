<template>
  <input class="shadow_btn_white bg-background-main" type="checkbox" />
</template>

<style lang="sass">
input[type="checkbox"]
    position: relative
    width: 50px
    height: 25px
    -webkit-appearance: none
    outline: none
    border-radius: 4px
    transition: .5s
    margin: 0 20px
input[type="checkbox"]:before
    content: ''
    position: absolute
    width: 19px
    height: 19px
    border-radius: 4px
    top: 50%
    transform: translate(0px, -50%)
    left: 3px
    background: linear-gradient(96.02deg, #00B047 0%, #4CD784 100%)
    transition: .5s

// input:checked[type="checkbox"]:before
//     left: 28px
</style>