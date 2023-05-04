<template>
  <div class="app__wrapper">
    <HeaderBurger
      @burgerClick="togglePopUp"
      @openHome="showHome"
      @openTest="toggleTestPopUp"
      @openInfo="showTestInfo"
    />
    <MainPage @openTest="toggleTestPopUp" @scrollDown="handleScrollDown" r />
    <QuotesBlueSection ref="$section" />
    <BrainStructure @openTest="toggleTestPopUp" />
    <TestInformation @openTest="toggleTestPopUp" />
  </div>
  <PopUp v-show="state.isOpenPopUp || state.isTestPopUp">
    <TestPopUp @burgerClick="togglePopUp" v-if="state.isTestPopUp" />
    <HeaderPopUp
      v-if="state.isOpenPopUp"
      @openHome="showHome"
      @openTest="toggleTestPopUp"
      @openInfo="showTestInfo"
      @close="togglePopUp"
    />
  </PopUp>
</template>

<script>
import HeaderBurger from "./components/HeaderBurger.vue";
import MainPage from "./components/MainPage.vue";
import HeaderPopUp from "./components/HeaderPopUp.vue";
import QuotesBlueSection from "./components/QuotesBlueSection.vue";
import BrainStructure from "./components/BrainStructure.vue";
import TestInformation from "./components/TestInformation.vue";
import TestPopUp from "./components/TestPopUp/index.vue";
import { reactive, ref } from "vue";
import PopUp from "./components/TestPopUp/PopUp.vue";

export default {
  name: "App",
  components: {
    HeaderBurger,
    MainPage,
    HeaderPopUp,
    QuotesBlueSection,
    BrainStructure,
    TestInformation,
    TestPopUp,
    PopUp,
  },
  setup() {
    const state = reactive({
      isOpenPopUp: false,
      isTestPopUp: false,
    });

    const $section = ref(null);

    const togglePopUp = () => {
      if (state.isOpenPopUp) {
        closePopUp("isOpenPopUp");
      } else {
        openPopUp("isOpenPopUp");
        closePopUp("isTestPopUp");
      }
    };

    const showHome = () => {
      togglePopUp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScrollDown = () => {
      $section.value.$el.scrollIntoView({ behavior: "smooth" });
    };

    const toggleTestPopUp = () => {
      if (state.isTestPopUp) {
        closePopUp("isTestPopUp");
      } else {
        openPopUp("isTestPopUp");
        closePopUp("isOpenPopUp");
      }
    };

    const openPopUp = (popUp) => {
      state[popUp] = true;
      document.body.classList.add("popUpOpened");
    };

    const closePopUp = (popUp) => {
      state[popUp] = false;
      document.body.classList.remove("popUpOpened");
    };

    const showTestInfo = () => {
      togglePopUp();
      handleScrollDown();
    };

    return {
      state,
      togglePopUp,
      handleScrollDown,
      $section,
      toggleTestPopUp,
      showTestInfo,
      showHome,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}

.popUpOpened {
  height: 100vh;
  overflow: hidden;
}

.app__wrapper {
  position: relative;
  max-width: 320px;
  margin: 0 auto;
  z-index: 1;
}

@media (max-width: 600px) {
  .app__wrapper {
    max-width: 100%;
  }
}

@media (min-width: 600px) {
  .app__wrapper {
    max-width: 100%;
  }
}
</style>
