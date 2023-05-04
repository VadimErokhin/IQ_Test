<template>
  <ul class="person person-wrapper">
    <li v-for="key in keys" :key="key" class="person__row">
      <div>
        {{ key }}
      </div>
      <div>
        {{ person[key] }}
      </div>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";

export default {
  name: "PersonInfo",
  props: {
    person: Object,
  },
  setup(props) {
    const keys = computed(() => {
      return Object.keys(props.person).filter(
        (key) => typeof props.person[key] === "string" && key !== "name"
      );
    });
    return {
      keys,
    };
  },
};
</script>

<style>
.person__row {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}

.person__row:not(:first-child) {
  border-top: 1px solid #fff;
}

.person-wrapper {
  padding: 20px;
  list-style: none;
}
</style>
