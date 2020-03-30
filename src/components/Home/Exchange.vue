<template>
  <section class="exchange">
    <div class="container">
      <div class="exchange_box">
        <CurrencySelection
          :exchangeBlocksActive="exchangeBlocksActive"
          @addBlock="exchangeBlocksActive = $event"
          @removeBlock="removeInfo"
        />
        <CurrencyExchange
          :class="{currencySelectionActive}"
          :exchangeBlocksActive="exchangeBlocksActive"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CurrencySelection from "@/components/Home/Exchange/CurrencySelection";
import CurrencyExchange from "@/components/Home/Exchange/CurrencyExchange";
export default {
  data() {
    return {
      exchangeBlocksActive: false,
      currencySelectionActive: false
    };
  },
  components: {
    CurrencyExchange,
    CurrencySelection
  },
  methods: {
    removeInfo() {
      this.$emit("removeBlock", (this.currencySelectionActive = true));
    }
  }
};
</script>

<style lang="sass">
.exchange
  margin: 0px 0 70px 0
.exchange_box
  display: flex
@media screen and (max-width: 992px)
  .exchange_box
    align-items: center
    flex-direction: column
</style>