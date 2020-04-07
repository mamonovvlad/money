<template>
  <div class="answers grow">
    <div class="main_text bg-background-descr">
      <h1 class="title text-copy-descr gamesDaymariusv">Вопрос-Ответ</h1>
      <p
        class="descr text-copy-main"
      >Тут текст по типу “Мы всегда рады ответить вам на ваши вопросы”</p>
    </div>
    <div class="container">
      <div class="answers_box">
        <div class="answers_items">
          <AnswersInfo
            v-for="(info, i) in infos"
            :info="info"
            :index="i"
            :key="i"
            @toggleOpen="toggleOpen"
            :open="info.open"
          />
        </div>
        <div class="no_answer">
          <h2 class="text-copy-descr gamesDaymariusv">Не нашли ответ?</h2>
          <p>Напишите нам на email и мы в ближайшее время ответим на все ваши вопросы</p>
          <figure>
            <img src="@/assets/image/answers/mail.svg" alt />
          </figure>
          <button class="green_btn text-copy-btngreen">Отправить собщение на e-mail</button>
          <p>Либо напишите нам в online чат, который находится справа внизу</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AnswersInfo from "@/components/Answers/AnswersInfo";
export default {
  data() {
    return {
      infos: [
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        },
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        },
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        },
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        },
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        },
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        },
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        },
        {
          title: "Чем занимается Ваш сервис?",
          descr:
            "У нас Вы можете осуществить обмен электронных валют Payeer USD, Perfect Money USD, Advanced Cash USD, Яндекс Деньги и QIWI. Купить или продать через Приват24(UAH), ПУМБ Online(UAH). А также обменять по доступным направлениям Крипто Валюту BITCOIN",
          open: false
        }
      ]
    };
  },
  components: {
    AnswersInfo
  },
  methods: {
    toggleOpen(index) {
      this.infos = this.infos.map((info, i) => {
        if (index === i) {
          info.open = !info.open;
        } else {
          info.open = false;
        }
        return info;
      });
    }
  }
};
</script>


<style lang="sass">
.answers
  margin-bottom: 60px
.answers_box
  margin-top: 60px
  display: flex
.answers_items
  margin-right: 40px
.no_answer
  min-width: 400px
  & h2
    font-weight: bold
    font-size: 3.6rem
    margin-bottom: 10px
  & p
    font-size: 1.7rem
    margin-bottom: 15px
  & figure
    margin-bottom: 50px
  & button
    border-radius: 10px
    padding: 17px 30px 15px
    margin-bottom: 15px
    max-width: 400px
    width: 100%
@media screen and (max-width: 992px)
  .answers .fon
    height: 250px
  .no_answer
    min-width: 320px
    &  h2
      font-size: 3rem
    & p
      font-size: 1.6rem
@media screen and (max-width: 768px)
  .answers_box
    flex-direction: column
  .no_answer
    max-width: 100%
    min-width: 100%
    text-align: center
    & h2
      font-size: 2.4rem
    &  p
      font-size: 1.4rem
@media screen and (max-width: 576px)
  .answers_box
    margin-top: 40px
  .no_answer
    & h2
      font-size: 1.8rem
    &  p
      font-size: 1.2rem
    & button
      display: none
    & figure
      margin-bottom: 30px
</style>