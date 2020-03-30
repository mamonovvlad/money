<template>
  <div class="currency_selection" :class="{currencySelectionActive}" v-if="tabelShowSelection">
    <div class="currency_selection_block shadow_btn_white bg-background-main give">
      <h2 class="title_section title_currency" v-if="selectionBlocksActive">Отдаёте</h2>
      <div class="currency">
        <ul class="list_currency" v-if="selectionBlocksActive">
          <li class="active_currency">All</li>
          <li>CRYPT</li>
          <li>USD</li>
          <li>RUB</li>
          <li>UAH</li>
          <li>CASH</li>
        </ul>

        <div class="line" v-if="selectionBlocksActive"></div>

        <ul class="payment_system_list">
          <li v-for="li in allGive" :key="li.id" @click="removeInfo">
            <div class="payment_system_name">
              <img :src="li.img" />
              <p v-if="selectionBlocksActive">{{li.title}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="currency_selection_block shadow_btn_white bg-background-main get">
      <h2 class="title_section title_currency" v-if="selectionBlocksActive">Получаете</h2>
      <div class="currency">
        <ul class="list_currency" v-if="selectionBlocksActive">
          <li class="active_currency">All</li>
          <li>CRYPT</li>
          <li>USD</li>
          <li>RUB</li>
          <li>UAH</li>
          <li>CASH</li>
        </ul>
        <div class="line" v-if="selectionBlocksActive"></div>
        <ul class="payment_system_list">
          <li v-for="li in allGive" :key="li.id" @click="removeInfo">
            <div class="payment_system_name">
              <img :src="li.img" />
              <p v-if="selectionBlocksActive">{{li.title}}</p>
            </div>
            <div class="payment_system_price" v-if="selectionBlocksActive">
              <p>
                24 900
                <span>rub</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="refresh">
      <i class="icon-refresh"></i>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currencySelectionActive: false,
      selectionBlocksActive: true,
      exchangeBlocksActive: false,
      tabelShowSelection: true,
      tabelShowExchange: true,
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
  },
  methods: {
    removeInfo() {
      if (window.innerWidth > 992) {
        this.$emit(
          "removeBlock",
          (this.selectionBlocksActive = false),
          (this.currencySelectionActive = true),
          this.$emit("addBlock", (this.exchangeBlocksActive = true))
        );
      } else {
        (this.currencySelectionActive = true),
          (this.tabelShowSelection = false);
      }
    }
  }
};
</script>





<style lang="sass">
.currency_selection
  display: flex
  max-width: 600px
  width: 100%
  transition: 500ms ease
  position: relative
  height: min-content
  & .refresh
    content: ''
    position: absolute
    top: 50%
    left: 50%
    opacity: 0
    background: linear-gradient(96.02deg, #00B047 0%, #4CD784 100%)
    border: 4px solid #ECECEC
    box-shadow: 4px 2px 8px rgba(136, 165, 191, 0.54), -4px -2px 8px #FFFFFF
    width: 46px
    height: 46px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    transform: translate(calc( -50% - 10px ) , -50%)
    transition: 150ms ease
    z-index: -100
    & i
      display: flex
      color: #fff
      font-size: 1.8rem
.currency
  transition: 500ms ease
.currency_selection_block
  max-width: 50%
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
    margin-right: 5px
    & p
      font-size: 1.3rem
  & .line
    width: auto
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
      line-height: 16px
      padding-top: 4px
  & .payment_system_price
    & p
      line-height: 15px
      color: #4F4F4F
      font-weight: 500
      font-size: 1.2rem
      width: max-content
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
.currencySelectionActive
  position: relative
  max-width: 180px
  width: 100%
  transition: 500ms ease
  & .refresh
    opacity: 1
    z-index: 1
  & .currency_selection_block .payment_system_name
    width: 30px
    margin-right: 0
  & .currency_selection_block .payment_system_list li img
    margin-right: 0
    width: 100%

@media screen and (max-width: 992px)
  .currency_selection
    justify-content: space-evenly
  .currency_selection_block
    margin-right: 10px
    margin-left: 10px
  .currency_selection_block
    max-width: 300px
    width: 100%
    padding: 10px 0px
  .currency_selection_block .payment_system_list li
    padding: 7px 10px
@media screen and (max-width: 768px)
  .currency_selection
    flex-direction: column
    align-items: center
  .currency_selection_block
    max-width: 400px
  .get
    display: none
</style>

