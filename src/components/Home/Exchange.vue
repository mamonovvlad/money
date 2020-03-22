<template>
  <section class="exchange">
    <div class="container">
      <div class="exchange_box">
        <CurrencySelection />
        <CurrencyExchange />
      </div>
    </div>
  </section>
</template>

<script>
import CurrencySelection from "@/components/Home/Exchange/CurrencySelection";
import CurrencyExchange from "@/components/Home/Exchange/CurrencyExchange";
export default {
  components: {
    CurrencyExchange,
    CurrencySelection
  }
};
</script>

<style lang="sass">
.exchange
  margin: 0px 0 70px 0
.exchange_box
  display: flex
.currency_exchange,
.currency_selection
  width: 50%
</style>