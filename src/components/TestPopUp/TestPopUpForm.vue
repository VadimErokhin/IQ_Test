<template>
  <section class="pop-up">
    <div class="pop-up__form form">
      <h1 class="form__title">{{ step.question }}</h1>
      <div v-if="step.type === RADIO_TYPE" class="form__wrapper radio-form">
        <img
          class="img-radioType radio-form__img"
          v-if="step.image"
          :src="step.image"
        />
        <template v-for="(option, index) in step.options" :key="option.value">
          <input
            @change="handleChange"
            type="radio"
            class="radio-btn"
            name="radio"
            :id="`option-${index}`"
            :value="option.value"
          />
          <div class="form__input-wrapper">
            <label class="form__label" :for="`option-${index}`">
              <span class="custom-radioBtn"></span>
              {{ option.label }}
            </label>
          </div>
        </template>
      </div>
      <div
        v-if="step.type === COLOR_TYPE"
        class="form__wrapper form__wrapper--color"
      >
        <label
          v-for="(option, index) in step.options"
          :key="option.value"
          :for="`color-option-${index}`"
        >
          <input
            class="input-hidden"
            @change="handleChange"
            :value="option.value"
            name="radio-color"
            type="radio"
            :id="`color-option-${index}`"
          />

          <div
            class="color-wrapper btn-color"
            :style="` background-color:${option.color}`"
          ></div>
        </label>
      </div>
      <div
        v-if="step.type === IMG_TYPE"
        class="form__wrapper form__wrapper--img"
      >
        <img class="img" :src="step.image" />

        <div class="buttons-wrapper">
          <label
            v-for="(option, index) in step.options"
            :key="option.value"
            :for="`img-option-${index}`"
          >
            <input
              class="input-hidden"
              @change="handleChange"
              :value="option.value"
              name="radio-img"
              type="radio"
              :id="`img-option-${index}`"
            />
            <div class="btn-img">{{ option.label }}</div>
          </label>
        </div>
      </div>
      <div>
        <button
          :disabled="isBtnDisabled"
          @click="$emit('next')"
          class="form__btn"
          type="submit"
        >
          ДАЛЕЕ
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { RADIO_TYPE, COLOR_TYPE, IMG_TYPE } from "./data";

export default {
  name: "TestPopUpForm",
  components: {},
  props: {
    step: Object,
  },
  setup(props, context) {
    const isBtnDisabled = ref(true);

    const handleChange = () => {
      isBtnDisabled.value = false;
    };

    return {
      RADIO_TYPE,
      COLOR_TYPE,
      IMG_TYPE,
      isBtnDisabled,
      handleChange,
    };
  },
};
</script>

<style>
/* RADION_TYPE */

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 450px;
  justify-content: space-around;
}

.form__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__title {
  color: #fff;
}

.form__label {
  display: flex;
  align-items: center;
  color: #fff;
}

.form__btn {
  background-color: #ffc700;
  color: #000;
  padding: 10px 50px;
  border-color: transparent;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
}

.form__btn:disabled {
  color: #8e8e8e;
  background-color: #dadada;
}

.form__input-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: rgba(242, 243, 243, 0.15);
  padding: 15px;
  margin-bottom: 10px;
}

.radio-btn:checked + .form__input-wrapper {
  background-color: #ffc700;
}

.radio-btn:checked + .form__input-wrapper label {
  color: #000;
}

.img-radioType {
  margin-bottom: 20px;
}

.radio-btn {
  display: none;
}

.custom-radioBtn {
  position: relative;
  display: inline-block;
  margin-right: 39px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
}

.custom-radioBtn::before {
  content: "";
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px solid #000;
  transform: translate(-50%, -50%);
  background-color: #2950c2;
  opacity: 0;
}

.radio-btn:checked + .form__input-wrapper .custom-radioBtn::before {
  opacity: 1;
}

/* COLOR_TYPE */

.form__wrapper--color {
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
}

.btn-color {
  position: relative;
  width: 75px;
  height: 75px;
  border: none;
}

.input-hidden {
  display: none;
}

.btn-color::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 6px solid #ffc700;
  opacity: 0;
}

.input-hidden:checked ~ .btn-color::before {
  opacity: 1;
}

/* IMG_TYPE */

.buttons-wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  width: 85%;
  margin-bottom: 35px;
}

.btn-img {
  position: relative;
  width: 44px;
  height: 41px;
  background-color: #fff;
  color: #0d0c11;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 6px solid #ffc700;
  opacity: 0;
}

.input-hidden:checked ~ .btn-img::before {
  opacity: 1;
}

@media (min-width: 600px) {
  .buttons-wrapper {
    width: 60%;
  }
}
</style>
