<template>
  <button @click="$emit('openTest')" class="v_button_test button">
    ПРОЙТИ ТЕСТ
  </button>
</template>

<script>
export default {
  name: "ButtonTest",
  components: {},
  props: {},
  setup() {
    return {};
  },
};
</script>

<style>
.button {
  padding: 10px 50px;
  background-color: #ffc700;
  border-color: transparent;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
}
</style>
