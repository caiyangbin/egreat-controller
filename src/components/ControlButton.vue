<template>
  <div class="parent">
    <img class="icon" :src="iconSrc">
  </div>
</template>

<script>

export default {
  name: 'ControlButton',
  props: {
    iconSrc: String
  }
}
</script>

<style scoped>
  .parent {
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    background-color: rgb(48, 48, 48);
    border-radius: 50%;
    border: none;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
</style>
