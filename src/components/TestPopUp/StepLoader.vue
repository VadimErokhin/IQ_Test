<template>
  <div class="loader-wrapper">
    <h1 class="test-loader__title">Обработка результатов</h1>
    <img class="test-loader__img" src="../../img/loader.svg" alt="loader" />
    <p class="test-loader__text" test-popUp_>Определение стиля мышления</p>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "StepLoader",
  setup(props, context) {
    onMounted(() => {
      setTimeout(() => {
        context.emit("loaded");
      }, 3000);
    });
    return {};
  },
};
</script>

<style>
.loader-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test-loader__title {
  color: white;
}

.test-loader__text {
  color: white;
}

.test-loader__img {
  animation: spinner 4s infinite linear;
}

@keyframes spinner {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}
</style>
