<template>
  <main class="v_main_page main">
    <div class="main__subContainer">
      <span class="main__announcement">Пройдите точный и быстрый </span>
      <h1 class="main__title">Тест на определение IQ</h1>
    </div>
    <div class="main__subContainer">
      <img class="main__img" src="../img/brain.png" alt="brain" />
      <ButtonTest @openTest="$emit('openTest')" />
    </div>
    <div class="main__subContainer">
      <MainFooter @scrollDown="$emit('scrollDown')" />
    </div>
  </main>
</template>

<script>
import ButtonTest from "./ButtonTest.vue";
import MainFooter from "./MainFooter.vue";

export default {
  name: "MainPage",
  components: {
    ButtonTest,
    MainFooter,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url(../img/main_background.png) no-repeat center / cover;
}

.main__subContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__announcement {
  display: block;
  padding-top: 20px;
  color: #fff;
}

.main__title {
  color: #ffc700;
  text-align: center;
}

.main__img {
  display: block;
  width: 100px;
  height: 100px;
}

@media (min-width: 600px) {
  .main__announcement {
    font-size: 25px;
  }

  .main__title {
    font-size: 45px;
  }

  .main__img {
    width: 200px;
    height: 200px;
  }

  .arrow__text {
    font-size: 20px;
  }

  .button {
    padding: 20px 70px;
    font-size: 17px;
  }

  .footer {
    font-size: 25px;
  }
}

@media (min-width: 1700px) {
  .main__announcement {
    font-size: 30px;
    padding-top: 30px;
  }

  .main__title {
    font-size: 55px;
  }

  .main__img {
    width: 250px;
    height: 250px;
  }

  .arrow__text {
    font-size: 25px;
  }

  .button {
    padding: 20px 90px;
    font-size: 17px;
  }

  .footer {
    font-size: 30px;
  }
}
</style>
