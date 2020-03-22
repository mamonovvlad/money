<template>
  <div class="currency_selection">
    <div class="currency_selection_block shadow_btn_white bg-background-main">
      <h2 class="title_section title_currency">Отдаёте</h2>
      <div class="currency">
        <ul class="list_currency">
          <li class="active_currency">All</li>
          <li>CRYPT</li>
          <li>USD</li>
          <li>RUB</li>
          <li>UAH</li>
          <li>CASH</li>
        </ul>
        <div class="line"></div>
        <ul class="payment_system_list">
          <li v-for="li in allGive" :key="li.id">
            <div class="payment_system_name">
              <img :src="li.img" />
              <p>{{li.title}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="currency_selection_block shadow_btn_white bg-background-main">
      <h2 class="title_section title_currency">Получаете</h2>
      <div class="currency">
        <ul class="list_currency">
          <li class="active_currency">All</li>
          <li>CRYPT</li>
          <li>USD</li>
          <li>RUB</li>
          <li>UAH</li>
          <li>CASH</li>
        </ul>
        <div class="line"></div>
        <ul class="payment_system_list">
          <li v-for="li in allGive" :key="li.id">
            <div class="payment_system_name">
              <img :src="li.img" />
              <p>{{li.title}}</p>
            </div>
            <div class="payment_system_price">
              <p>
                24 900
                <span>rub</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      allGive: [
        {
          title: "Bitcoin",
          img: "/img/bitcoin.e50994f4.svg"
        },
        {
          title: "Litecoin",
          img: "/img/ltecoin.223f9bc3.svg"
        },
        {
          title: "Dash",
          img: "/img/bash.4b1480be.svg"
        },
        {
          title: "Zcash",
          img: "/img/zcash.1fbfa0a1.svg"
        },
        {
          title: "Яндекс Деньги RUB",
          img: "/img/ya.4d0be6e7.svg"
        },
        {
          title: "Exmo RUB",
          img: "/img/exmo.1cd755a1.svg"
        },
        {
          title: "PerfectMoney USD",
          img: "/img/PerfectMoney.bef39e9d.svg"
        },
        {
          title: "Advanced Cash USD",
          img: "/img/advanced.2d4f9f19.svg"
        },
        {
          title: "Payeer USD",
          img: "/img/payeer.4137a108.svg"
        },
        {
          title: "Exmo USD",
          img: "/img/exmo.1cd755a1.svg"
        },
        {
          title: "Приват 24 UAH",
          img: "/img/24UAH.ac561232.svg"
        },
        {
          title: "Tether ERC20",
          img: "/img/tether.f828cab9.svg"
        },
        {
          title: "Наличные USD",
          img: "/img/usd.c867a77d.svg"
        }
      ],
      allGet: [
        {
          title: "Bitcoin",
          img: "/img/bitcoin.e50994f4.svg"
        },
        {
          title: "Litecoin",
          img: "/img/ltecoin.223f9bc3.svg"
        },
        {
          title: "Dash",
          img: "/img/bash.4b1480be.svg"
        },
        {
          title: "Zcash",
          img: "/img/zcash.1fbfa0a1.svg"
        },
        {
          title: "Яндекс Деньги RUB",
          img: "/img/ya.4d0be6e7.svg"
        },
        {
          title: "Exmo RUB",
          img: "/img/exmo.1cd755a1.svg"
        },
        {
          title: "PerfectMoney USD",
          img: "/img/PerfectMoney.bef39e9d.svg"
        },
        {
          title: "Advanced Cash USD",
          img: "/img/advanced.2d4f9f19.svg"
        },
        {
          title: "Payeer USD",
          img: "/img/payeer.4137a108.svg"
        },
        {
          title: "Exmo USD",
          img: "/img/exmo.1cd755a1.svg"
        },
        {
          title: "Приват 24 UAH",
          img: "/img/24UAH.ac561232.svg"
        },
        {
          title: "Tether ERC20",
          img: "/img/tether.f828cab9.svg"
        },
        {
          title: "Наличные USD",
          img: "/img/usd.c867a77d.svg"
        }
      ]
    };
  }
};
</script>





<style lang="sass">
.currency_selection
  display: flex
.currency_selection_block
  width: 50%
  flex-grow: 1
  margin-right: 20px
  border-radius: 10px
  padding: 30px 0px
  height: min-content
  & .title_currency
    padding: 0 20px
  & .currency .list_currency
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 13px
    margin: 20px 0 15px
  & .list_currency li
    font-size: 1.2rem
    margin-right: 4px
    padding: 3px 5px
    cursor: pointer
    &:last-child
      margin-right: 0px
  & .payment_system_name
    display: flex
    align-items: center
    & p
      font-size: 1.4rem
  & .line
    height: 2px
    background: #DEE6EC
    margin: 0 20px 16px
  & .payment_system_list
    padding: 0 10px
  & .payment_system_list li
    display: flex
    align-items: center
    padding: 9px 10px
    justify-content: space-between
    transition: 250ms ease
    cursor: pointer
    &:hover
      background: #D9E1E8
      border-radius: 4px
      color: #00B047
      transition: 200ms ease
      box-shadow: inset 3px 3px 3px rgba(136, 165, 191, 0.48), inset -3px -3px 3px #FFFFFF
    & img
      margin-right: 5px
      width: 20px
    & p
      line-height: 10px
      padding-top: 4px
  & .payment_system_price
    & p
      line-height: 15px
      color: #4F4F4F
      font-weight: 500
      font-size: 1.2rem
    & span
      font-size: 12px
      font-weight: 400
      color: #7F848C
.payment_active
  background: #D9E1E8
  border-radius: 4px
  box-shadow: inset 3px 3px 3px rgba(136, 165, 191, 0.48), inset -3px -3px 3px #FFFFFF
  color: #00B047
.active_currency
  background: #E8EDF1
  box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -4px -2px 8px #FFFFFF
  border-radius: 4px
  color: #00B047
</style>