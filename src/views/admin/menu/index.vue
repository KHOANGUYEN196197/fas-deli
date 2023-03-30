<template>
  <div class="wrap-menu">
    <label>Paragraph</label>
    <label>Paragraph</label>
    <label>button</label>
  </div>
</template>

<script>
export default {
  name: "MenuC",
  components: {},
};
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin-top: 94px;
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    content: "";
    width: 94px;
    height: 70px;
    background: #ffffff;
    top: -80px;
    left: 0;
    right: 0;
    margin: auto;
    border: 1px solid;
  }
}
.wrap-menu {
  width: 22%;
  height: 65vh;
  background: #ffffff;
  padding: 25px 0px;
  border-right: 1px solid;
}
</style>
