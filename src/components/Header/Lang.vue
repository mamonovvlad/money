<template>
  <div class="icon lang shadow_btn_white bg-background-main" :class="{lang_activ_btn}">
    <button class="btn_icon" @click="$emit('langBtn')">
      <img src="@/assets/image/header/russia.svg" alt="languages" />
    </button>
    <div class="lang_box bg-background-main shadow_btn_white_active" :class="{lang_activ_block}">
      <button class="btn_lang">
        <img src="@/assets/image/header/greatbritain.svg" alt="languages" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang_activ_btn: {},
    lang_activ_block: {}
  }
};
</script>
