<template>
  <div class="popUp__container">
    <div class="popUp__overlay"></div>
    <div class="popUp">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  components: {},
  props: {},
  setup() {
    return {};
  },
};
</script>

<style>
.popUp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 568px;
}

.popUp__container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.popUp__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.popUp__wrapper {
  padding-top: 20px;
  min-height: 520px;
  height: 100%;
  background: url(../../img/testPopUp_back.png) no-repeat center / cover;
}

@media (max-width: 600px) {
  .popUp {
    width: 100%;
    height: 100vh;
  }
}

@media (min-width: 600px) {
  .popUp {
    width: 600px;
    height: inherit;
  }

  .form__wrapper--color {
    width: 60%;
  }
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
