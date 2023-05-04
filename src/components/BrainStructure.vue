<template>
  <section class="brain">
    <div class="brain__wrapper">
      <p class="brain__text">
        Также по результатам теста
        <b>ВЫ ПОЛУЧИТЕ </b>подробные <b>СОВЕТЫ</b> по определению наиболее
        перспективной <b>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ</b>,
        которая принесет вам скорейший финансовый результат.
      </p>
      <img src="../img/brain_structure.png" alt="brain_structure" />
      <ButtonTest @openTest="$emit('openTest')" />
    </div>
  </section>
</template>

<script>
import ButtonTest from "./ButtonTest.vue";

export default {
  name: "BrainStructure",
  components: {
    ButtonTest,
  },
  props: {},
};
</script>

<style>
.brain__wrapper {
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 600px) {
  .brain__text {
    font-size: 25px;
  }
}

@media (min-width: 1700px) {
  .brain__text {
    font-size: 30px;
  }
}
</style>
