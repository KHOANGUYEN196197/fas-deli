<template>
  <ListAction />
  <div class="wrap">
    <div class="wrap-admin">
      <ViewAdmin />
    </div>
  </div>
</template>

<script>
import ListAction from "../button/index.vue";
import ViewAdmin from "../admin/view/index.vue";
export default {
  name: "AdminC",
  components: {
    ListAction: ListAction,
    ViewAdmin: ViewAdmin,
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
}
.wrap-admin {
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: auto;
}
</style>
