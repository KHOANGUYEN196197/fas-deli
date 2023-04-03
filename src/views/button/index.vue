<template>
  <div class="menu">
    <button @click="save()">Save</button>
    <button>Undo</button>
    <button>Redo</button>
    <button>Export</button>
    <button>Import</button>
    <button @click="view()">View</button>
  </div>
</template>

<script>
import { useLayoutStore } from "../../store/store";
export default {
  name: "ListAction",
  components: {},
  data() {
    return {
      layouts: [],
    };
  },
  setup() {
    const layoutTodo = useLayoutStore();
    return { layoutTodo };
  },
  mounted() {
    this.layouts = this.layoutTodo.layouts;
  },
  methods: {
    view() {
      this.layoutTodo.viewLayout();
    },
    save() {
      this.layoutTodo.saveLayout();
    },
  },
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
