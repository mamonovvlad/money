<template>
  <div class="social-network">
    <a href="#">
      <img src="@/assets/image/header/facebook.svg" alt="facebook" />
    </a>
    <a href="#">
      <img src="@/assets/image/header/twit.svg" alt="twitter" />
    </a>
    <a href="#">
      <img src="@/assets/image/header/inst.svg" alt="instagram" />
    </a>
    <a href="#">
      <img src="@/assets/image/header/ok.svg" alt="ok" />
    </a>
    <a href="#">
      <img src="@/assets/image/header/tel.svg" alt="telegram" />
    </a>
    <a href="#">
      <img src="@/assets/image/header/youtube.svg" alt="youtube" />
    </a>
    <a href="#">
      <img src="@/assets/image/header/vk.svg" alt="vk" />
    </a>
  </div>
</template>


<style lang="sass">
.burger_social
  display: flex
  margin: 30px 0 0 20px
  & a
    width: 30px
    height: 30px
    margin-right: 25px
    transition: 500ms ease
    filter: grayscale(100%)
    &:hover
      transition: 500ms ease
      filter: grayscale(0%)
  & img
    width: 100%
</style>