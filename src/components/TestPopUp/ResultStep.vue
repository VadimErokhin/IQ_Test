<template>
  <div class="result result-wrapper">
    <h2 class="result__title">Ваш результат рассчитан:</h2>
    <p class="result__text">
      <u>Вы относитесь к 3% </u>респондентов, чей уровень интеллекта более чем
      на 15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <h2 class="result__subtitle">СКОРЕЕ ПОЛУЧИТЕ СВОЙ РЕЗУЛЬТА!</h2>
    <p class="result__subtitle-text">
      В целях защиты персональных данных результат теста, их подробная
      интерпретация и рекомендации доступны в виде голосового сообщения по
      звонку с вашего мобильного телефона
    </p>
    <p class="result__timer">
      Звоните скорее, запись доступна всего {{ formatedTimer }} МИНУТ
    </p>
    <button @click="$emit('getData')" class="result__btn">
      <img class="result__btn-img" src="../../img/call.svg" alt="phone" />
      Позвонить и прослушать результат
    </button>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

export default {
  name: "ResultStep",
  setup() {
    const timer = ref(600000);
    const formatedTimer = computed(() => {
      let minutes = Math.floor(timer.value / 60000);
      let seconds = ((timer.value % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    });
    onMounted(() => {
      setInterval(() => {
        if (timer.value > 0) {
          timer.value -= 1000;
        } else {
          timer.value = 0;
        }
      }, 1000);
    });

    return {
      formatedTimer,
    };
  },
};
</script>

<style>
.result-wrapper {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.result__title {
  text-align: center;
  color: #fff;
}

.result__text {
  color: #fff;
  text-align: center;
}

.result__subtitle {
  color: #3bde7c;
  text-align: center;
}

.result__subtitle-text {
  color: #fff;
  background-color: #1c2741;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.result__timer {
  color: #3bde7c;
  text-align: center;
  max-width: 87%;
}

.result__btn {
  padding: 30px;
  border-radius: 10px;
  background-color: #eb1b00;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 15px;
  text-align: left;
}

.result__btn-img {
  margin-right: 20px;
}
</style>
