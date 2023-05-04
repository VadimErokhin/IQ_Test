<template>
  <section class="test-info">
    <div class="test-info__wrapper test-text test">
      <p class="test-info__text">
        Прохождение теста займет у вас не более
        <span class="test-text__yellow">12 минут</span>, а его результаты вы
        <span class="test-text__yellow">сможете использовать всю жизнь.</span>
      </p>

      <p class="test-text__description">
        Профессиональная интерпретация и детально
        <b>проработанные рекомендации </b>позволят вам качественно
        <b>изменить все аспекты своей жизни:</b> от финансового до любовного.
      </p>

      <button @click="$emit('openTest')" class="test__btn">ПРОЙТИ ТЕСТ</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestInformation",
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
.test-info__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  min-height: 533px;
  background: url(../img/test_information_background.png) no-repeat center /
    cover;
}

.test-info__text {
  padding-top: 55px;
  margin: 0;
  color: #fff;
  font-size: 15px;
}

.test-text__yellow {
  color: rgba(255, 199, 0, 1);
}

.test-text__description {
  font-size: 18px;
  border-radius: 20px;
  padding: 10px;
  background-color: rgba(243, 243, 242, 0.8);
}

.test__btn {
  margin-top: 35px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  padding: 10px 50px;
  border-radius: 30px;
  cursor: pointer;
}

@media (min-width: 600px) {
  .test-info__text {
    font-size: 20px;
    text-align: center;
  }

  .test-text__description {
    font-size: 25px;
  }

  .test__btn {
    padding: 20px 70px;
    font-size: 17px;
  }
}

@media (min-width: 1700px) {
  .test-info__text {
    font-size: 25px;
  }

  .test-text__description {
    font-size: 30px;
  }

  .test__btn {
    padding: 20px 90px;
    font-size: 17px;
  }
}
</style>
