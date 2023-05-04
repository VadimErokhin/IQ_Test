<template>
  <footer class="v_main_footer footer">
    <span class="footer__text"
      ><span class="footer__yellow-text">
        И получите рекомендации по развитию своего интеллекта </span
      >и улучшению финансового благосостояния и личной жизни</span
    >

    <div @click="$emit('scrollDown')" class="arrow__wrapper">
      <svg
        class="arrow"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.45453 7.63636L4.45453 2.10454L6.99544 4.64545L7.63635 4L3.99999 0.363632L0.363625 4L1.00453 4.6409L3.54544 2.10454L3.54544 7.63636L4.45453 7.63636Z"
          fill="#000"
        />
      </svg>
    </div>

    <span @click="$emit('scrollDown')" class="arrow__text"> Подробнее </span>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
.footer {
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
}

.footer__yellow-text {
  display: block;
  color: #ffc700;
}

.footer__text {
  text-align: center;
  color: #fff;
}

.arrow__wrapper {
  position: relative;
  margin-top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  display: block;
  background-color: #fff;
  cursor: pointer;
  transform: rotate(180deg);
}

.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.arrow__text {
  display: block;
  color: #fff;
  font-size: 15px;
}
</style>
