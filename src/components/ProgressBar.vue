<template>
  <div class="progress-bar">
    <div class="progress-bar__inner" :style="barStyle"></div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ProgressBar",
  components: {},
  props: {
    percent: Number,
  },
  setup(props) {
    const barStyle = computed(() => {
      if (!props.percent) {
        return "";
      }
      return `transform: translateX(-${100 - props.percent}%)`;
    });
    return {
      barStyle,
    };
  },
};
</script>

<style>
.progress-bar {
  position: relative;
  margin: 0 auto;
  max-width: 260px;
  height: 11px;
  background-color: #f2f3f3;
  border-radius: 10.5px;
  overflow: hidden;
}

.progress-bar__inner {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #3bde7c;
  height: 11px;
  width: 100%;
  transform: translateX(-100%);
  border-radius: 10.5px;
}
</style>
