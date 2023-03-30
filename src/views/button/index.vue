<template>
  <div class="menu">
    <button>Save</button>
    <button>Undo</button>
    <button>Redo</button>
    <button>Export</button>
    <button>Import</button>
    <button>View</button>
  </div>
</template>

<script>
export default {
  name: "ListAction",
  components: {},
};
</script>

<style scoped>
.menu {
  padding: 25px 0;
  border-bottom: 1px solid;
}
button {
  border: none;
  padding: 12px 15px;
  color: white;
  background: #ed4b33;
}
</style>
