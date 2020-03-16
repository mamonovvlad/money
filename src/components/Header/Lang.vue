<template>
  <div class="lang shadow-btn" :class="{lang_activ_btn: lang_activ_btn}">
    <button
      class="btn_lang"
      @click="lang_activ_btn = !lang_activ_btn,
    lang_activ_block = !lang_activ_block"
    >
      <img src="@/assets/image/header/russia.svg" alt="languages" />
    </button>
    <div class="lang_box" :class="{lang_activ_block: lang_activ_block}">
      <button class="btn_lang">
        <img src="@/assets/image/header/greatbritain.svg" alt="languages" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang_activ_btn: false,
      lang_activ_block: false
    };
  }
};
</script>