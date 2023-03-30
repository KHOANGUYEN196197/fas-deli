<template>
  <ListAction />
  <div class="wrap">
    <Menu />
    <div class="wrap-admin">
      <ViewAdmin />
    </div>
  </div>
  <div class="wrap-edittor">
    <Edittor />
  </div>
</template>

<script>
import ListAction from "../button/index.vue";
import Menu from "../admin/menu/index.vue";
import ViewAdmin from "../admin/view/index.vue";
import Edittor from "../admin/edittor/index.vue";
export default {
  name: "AdminC",
  components: {
    ListAction: ListAction,
    Menu: Menu,
    ViewAdmin: ViewAdmin,
    Edittor: Edittor,
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
}
.wrap-admin {
  width: 88%;
  height: 65vh;
  background: #ffffff;
  padding: 25px 0px;
  overflow: auto;
}
</style>
