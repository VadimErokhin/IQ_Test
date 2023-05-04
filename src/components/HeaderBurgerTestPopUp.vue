<template>
  <header class="header">
    <div class="burger__wrapper" @click="openPopUp">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img class="header__img" src="../img/brain.png" alt="brain" />
    <h1 class="header__title">
      <slot>ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: "HeaderBurgerTestPopUp",
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
  display: flex;
  align-items: center;
  background-color: #181818;
}

.header__title {
  font-size: 15px;
  color: rgba(255, 199, 0, 1);
}

.nav__list {
  display: flex;
  flex-direction: column;
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

.header__img {
  margin-right: 5px;
  width: 47px;
  height: 47px;
}
</style>
