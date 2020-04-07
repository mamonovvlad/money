<template >
  <div class="news_item bg-background-main shadow_btn_white">
    <p class="news_title text-copy-descr gamesDaymariusv">{{ title }}</p>
    <p class="news_date">{{ date }}</p>
    <div class="line"></div>
    <p class="news_descr text-copy-descr">{{ descr }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "С Наступающим 2019 годом",
      date: "31.09.2019",
      descr:
        "Здравствуйте Уважаемые клиенты и посетители нашего сайта! Поздравляем Вас с Наступающим Новым Годом и Рождеством Христовым!!! Примите наши искренние поздравления. Желаем Вам в Новом 2019 году всего самого наилучшего: здоровья, любви, тепла, мира и уюта в Ваших домах, достатка и благополучия ,а также что бы В Новом Году Ваши финансовые возможности всегда опережали Ваши желания))) С Праздиками Вас"
    };
  }
};
</script>