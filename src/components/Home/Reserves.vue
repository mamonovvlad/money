<template>
  <section class="reserves">
    <div class="container">
      <h2 class="title_heading">Резервы валют</h2>
      <div class="reserves_box bg-background-main shadow_btn_white">
        <div class="reserves_block">
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/bitcoin.svg" alt="bitcoin" />
              <p>Bitcoin</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/ltecoin.svg" alt="Litecoin" />
              <p>Litecoin</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/zcash.svg" alt="Zcash" />
              <p>Zcash</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/bash.svg" alt="Dash" />
              <p>Dash</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/ya.svg" alt="Яндекс Деньги RUB" />
              <p>Яндекс Деньги RUB</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
        </div>
        <div class="reserves_block">
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/exmo.svg" alt="Exmo RUB" />
              <p>Exmo RUB</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/PerfectMoney.svg" alt="PerfectMoney USD" />
              <p>PerfectMoney USD</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/advanced.svg" alt="Advanced Cash USD" />
              <p>Advanced Cash USD</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/payeer.svg" alt="Payeer USD" />
              <p>Payeer USD</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
        </div>
        <div class="reserves_block">
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/exmo.svg" alt="Exmo RUB" />
              <p>Exmo RUB</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/24UAH.svg" alt="Приват 24 UAH" />
              <p>Приват 24 UAH</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/tether.svg" alt="Tether ERC20" />
              <p>Tether ERC20</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
          <div class="reserves_item">
            <div class="reserves_name">
              <img src="@/assets/image/home/currency/usd.svg" alt="Наличные USD" />
              <p>Наличные USD</p>
            </div>
            <p class="price">
              24 900
              <span>rub</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="sass">
//Reserves
.reserves_box
  border-radius: 10px
  display: flex
  padding: 20px 20px
.reserves_block
  position: relative
  display: flex
  flex-grow: 1
  flex-direction: column
  margin: 0 20px
  max-width: 360px
  width: 100%
  &:after
    content: ''
    position: absolute
    right: -20px
    height: 100%
    width: 2px
    background: #DEE6EC
  &:last-child::after
    display: none
.reserves_item
  display: flex
  width: 100%
  justify-content: space-between
  margin-bottom: 20px
  &:last-child
    margin-bottom: 0px
  & .price
    line-height: 15px
    color: #4F4F4F
    font-weight: 500
    & span
      font-size: 12px
      font-weight: 400
      color: #7F848C
.reserves_name
  display: flex
  align-items: center
  & p
    line-height: 15px
  & img
    margin-right: 5px
@media screen and (max-width: 1024px)
  .reserves_name p,
  .reserves_item .price
    font-size: 1.4rem
@media screen and (max-width: 992px)
  .reserves_box
    padding: 20px 10px
  .reserves_block
    margin: 0 10px
    &:after
      right: -10px
  .reserves_name p,
  .reserves_item .price
    font-size: 1.2rem
  .reserves_item
    margin-bottom: 15px
</style>