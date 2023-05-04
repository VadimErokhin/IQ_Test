<template>
  <header class="header_pop_up">
    <div class="cross_wrapper" @click="$emit('close')">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z"
          fill="#FFC700"
        />
      </svg>
    </div>
    <nav class="header__nav nav">
      <ul class="nav__list">
        <div class="nav__link" @click="$emit('openHome')">Главная</div>
        <div class="nav__link" @click="$emit('openInfo')">
          Информация о тесте
        </div>
        <div class="nav__link" @click="$emit('openTest')">Пройти тест</div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderPopUp",
};
</script>

<style>
.header_pop_up {
  position: relative;
  padding: 10px;
  height: 100%;
  background-color: rgba(24, 24, 24, 1);
}

.header_pop_up.active {
  display: block;
}

.nav__list {
  display: flex;
  padding: 20px;
  flex-direction: column;
}

.nav__link {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.nav__link:not(:last-child) {
  margin-bottom: 20px;
}

.cross_wrapper {
  cursor: pointer;
  position: absolute;
  right: 10px;
}
</style>
