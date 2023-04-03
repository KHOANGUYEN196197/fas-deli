<template>
  <div style="display: flex">
    <div class="wrap-menu">
      <label
        class="babel-menu"
        v-for="item of buttons"
        :key="item"
        @click="addItem(item.type)"
      >
        {{ item.text }}</label
      >
    </div>
    <div style="width: 100%; height: 67vh">
      <grid-layout
        v-model:layout="layouts"
        :col-num="12"
        :row-height="30"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :responsive="false"
        :vertical-compact="false"
        :prevent-collision="true"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="item in layouts"
          :key="item"
          :static="item.static"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
        >
          <span @click="editDetail(item)" class="text">
            <TypeView :type="item" :isView="false" />
          </span>
        </grid-item>
      </grid-layout>
    </div>
  </div>
  <div class="wrap-edittor">
    <Edittor :objEditor="objEditor" />
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue3-grid-layout";
import { useLayoutStore } from "../../../store/store";
import TypeView from "../view/type-view/index.vue";
import Edittor from "../edittor/index.vue";
export default {
  name: "ViewC",
  components: {
    GridLayout,
    GridItem,
    TypeView: TypeView,
    Edittor: Edittor,
  },
  data() {
    return {
      draggable: true,
      resizable: true,
      layouts: [],
      index: 0,
      buttons: [
        {
          id: 1,
          text: "Button",
          type: "button",
        },
        {
          id: 1,
          text: "Paragraph",
          type: "paragraph",
        },
      ],
      objEditor: {},
    };
  },
  setup() {
    const layoutTodo = useLayoutStore();
    return { layoutTodo };
  },
  mounted() {
    this.layouts = this.layoutTodo.layouts;
    this.index = 0;
  },
  methods: {
    addItem: function (type) {
      this.layoutTodo.addLayout({
        x: 0,
        y: 0,
        w: 2.5,
        h: 1,
        i: this.index,
        static: false,
        type: type,
        text: type,
        actionText: type === "button" ? "Alert Message" : null,
      });
      this.index++;
      this.layouts = this.layoutTodo.layouts;
    },
    editDetail(item) {
      this.objEditor = item;
    },
  },
};
</script>

<style lang="scss">
.babel-menu {
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
  height: 67vh;
  background: #ffffff;
  padding: 25px 0px;
  border-right: 1px solid;
}
.vue-grid-layout {
  background: #ffffff;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ffffff;
  border: none;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  display: none;
}
.vue-resizable-handle {
  display: none;
}
</style>
