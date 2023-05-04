<template>
  <HeaderBurgerTestPopUp @burgerClick="$emit('burgerClick')">
    <span v-if="steps.length + 1 === state.currentStep">ГОТОВО</span>
    <span v-if="steps.length + 2 === state.currentStep">{{
      state.person.name
    }}</span>
  </HeaderBurgerTestPopUp>
  <div class="test-popUp__wrapper">
    <ProgressBar
      v-if="steps.length + 1 > state.currentStep"
      :percent="currenPercent"
    />
    <template :key="index" v-for="(step, index) in steps">
      <TestPopUpForm
        v-if="state.currentStep === index"
        :step="step"
        @next="incrementStep"
      />
    </template>
    <StepLoader
      v-if="steps.length === state.currentStep"
      @loaded="incrementStep"
    />
    <ResultStep
      v-if="steps.length + 1 === state.currentStep"
      @getData="getInfo"
    />
    <PersonInfo
      v-if="steps.length + 2 === state.currentStep"
      :person="state.person"
    />
  </div>
</template>

<script>
import HeaderBurgerTestPopUp from "../HeaderBurgerTestPopUp.vue";
import ProgressBar from "../ProgressBar.vue";
import TestPopUpForm from "./TestPopUpForm.vue";
import { steps, RADIO_TYPE, COLOR_TYPE, IMG_TYPE } from "../TestPopUp/data";
import { computed, reactive } from "vue";
import StepLoader from "./StepLoader.vue";
import ResultStep from "./ResultStep.vue";
import PersonInfo from "./PersonInfo.vue";

export default {
  name: "BrainStructure",
  components: {
    HeaderBurgerTestPopUp,
    ProgressBar,
    TestPopUpForm,
    StepLoader,
    ResultStep,
    PersonInfo,
  },
  props: {},
  setup() {
    const state = reactive({
      currentStep: 0,
      person: null,
    });

    const currenPercent = computed(() => {
      const stepsAmount = steps.length + 1;
      return Math.floor(((state.currentStep + 1) / stepsAmount) * 100);
    });

    const incrementStep = () => {
      state.currentStep++;
    };

    const getInfo = async () => {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const data = await response.json();
      state.person = data;
      incrementStep();
    };

    return {
      state,
      steps,
      RADIO_TYPE,
      COLOR_TYPE,
      IMG_TYPE,
      incrementStep,
      currenPercent,
      getInfo,
    };
  },
};
</script>

<style>
.test-popUp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 568px;
}

.test-popUp__container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.test-PopUp__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.test-popUp__wrapper {
  padding: 20px 0;
  min-height: 520px;
  height: 100%;
  background: url(../../img/testPopUp_back.png) no-repeat center / cover;
}

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

@media (max-width: 500px) {
  .test-popUp {
    width: 100%;
    height: 100vh;
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
