<template>
  <footer class="footer bg-background-descr" id="footer">
    <div class="container">
      <div class="footer_box">
        <div class="footer_block">
          <p>Лучший онлайн сервис обмена электронных и криптовалют 7money.co © 2016-2020</p>
        </div>
        <div class="footer_block">
          <a class="mail" href="mailto:hello@7money.co">hello@7money.co</a>
          <a
            class="link"
            href="https://www.bestchange.net/7money-exchanger.html"
            target="_blank"
          >BESTCHANGE</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass">
.footer
  padding: 40px 0
  position: relative
  z-index: 0
.footer_box
  display: flex
  align-items: center
  justify-content: space-between
.footer_block
  display: flex
  align-items: center
  & .mail,
  & .link
    font-size: 1.4rem
    & .link
      margin-left: 70px
</style>