<template>
  <div>
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
        <span class="text">
          <TypeView :type="item" :isView="true" />
        </span>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue3-grid-layout";
import TypeView from "../admin/view/type-view/index.vue";
export default {
  name: "ConsumerC",
  data() {
    return {
      draggable: false,
      resizable: false,
      layouts: [],
    };
  },
  components: { GridLayout, GridItem, TypeView: TypeView },
  mounted() {
    this.layouts = JSON.parse(localStorage.getItem("data"));
  },
};
</script>

<style></style>
