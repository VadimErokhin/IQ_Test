<template>
  <header class="header">
    <div class="burger__wrapper" @click="openPopUp">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="header__nav-list">
      <div class="nav__link" @click="$emit('openHome')">Главная</div>
      <div class="nav__link" @click="$emit('openInfo')">Информация о тесте</div>
      <div class="nav__link" @click="$emit('openTest')">Пройти тест</div>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderBurger",
  setup(props, context) {
    const openPopUp = () => {
      context.emit("burgerClick");
    };
    return {
      openPopUp,
    };
  },
};
</script>

<style>
.header {
  background-color: #181818;
}

.header__nav-list {
  display: none;
}

.burger__wrapper {
  padding: 10px;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  cursor: pointer;
}

.burger__wrapper span {
  width: 30px;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dadada;
  transition: all 0.5s;
}

.burger__wrapper span:nth-of-type(2) {
  top: calc(50% - 5px);
}

.burger__wrapper span:nth-of-type(3) {
  top: calc(50% + 5px);
}

@media (min-width: 600px) {
  .burger__wrapper {
    display: none;
  }

  .header__nav-list {
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
  }
}

@media (min-width: 1700px) {
  .header__nav-list .nav__link {
    font-size: 25px;
  }
}
</style>
