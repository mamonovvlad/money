<template>
  <div class="authorization">
    <perfect-scrollbar class="scroll_box scroll">
      <div class="authorization_box shadow_btn_white bg-background-main">
        <div class="close" @click="$emit('closeModal')">
          <i class="icon-cancel"></i>
        </div>
        <div class="authorization_toggle">
          <p @click="entrance" :class="{activeEntrance}">Вход</p>
          <Switched :class="{activeRegistration}" />
          <p @click="registration " :class="{activeRegistration}">Регистрация</p>
        </div>
        <Entrance v-if="activeEntrance" @openPasswordRecovery="$emit('openPasswordRecovery')" />
        <Registration v-if="activeRegistration" />
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
import Switched from "@/components/Switched";
import Entrance from "@/components/Header/Authorization/Entrance";
import Registration from "@/components/Header/Authorization/Registration";
export default {
  props: {
    activeEntrance: {},
    activeRegistration: {}
  },
  data() {
    return {};
  },
  components: {
    PerfectScrollbar,
    Entrance,
    Switched,
    Registration
  },
  methods: {
    registration() {
      let activeEntranceUpdate = this.activeEntrance;
      let activeRegistrationUpdate = this.activeRegistration;
      this.$emit(
        "addClassRegistration",
        activeEntranceUpdate,
        activeRegistrationUpdate
      );
    },
    entrance() {
      let activeEntranceUpdate = this.activeEntrance;
      let activeRegistrationUpdate = this.activeRegistration;
      this.$emit(
        "addClassEntrance",
        activeEntranceUpdate,
        activeRegistrationUpdate
      );
    }
  }
};
</script>
<style lang="sass">
.authorization
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: none
  justify-content: center

  background: rgba(255,255,255,.6)

  z-index: 10
.scroll_box
  display: flex
  align-items: baseline
  justify-content: center
  padding: 30px 10px
  width: 100%
  height: 100%

.authorization_box
  position: relative
  max-width: 425px
  width: 100%
  padding: 30px
  border-radius: 8px

  & .close
    position: absolute
    right: 0
    top: 0
    padding: 5px 10px
    cursor: pointer
.authorization_toggle
  display: flex
  align-items: center
  margin-bottom: 25px
  & p
    font-weight: bold
    font-size: 2.4rem
    cursor: pointer

.authorization_toggle .activeRegistration:before
  left: 28px
.activeRegistration,
.activeEntrance,
  color: #363C46

@media screen and (max-width: 768px)
  .authorization_box
    padding: 25px 15px
  .authorization_toggle
    align-items: end
    justify-content: center
    & p
      font-size: 1.8rem
  .authorization_box .close
    right: -3px
    top: -3px
</style>