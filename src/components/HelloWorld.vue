<template>
  <ListAction />
  <div>
    <div class="layoutJSON">
      Displayed as <code>[x, y, w, h]</code>:
      <div class="columns">
        <div class="layoutItem" v-for="item in layout" :key="item.i">
          <b>{{ item.i }}</b
          >: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
        </div>
      </div>
    </div>
    <button @click="addItem">Add an item dynamically</button>
    <input type="checkbox" v-model="draggable" /> Draggable
    <input type="checkbox" v-model="resizable" /> Resizable
    <grid-layout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      @resize="resize"
      @move="move"
      @moved="moved"
    >
      <template #item="{ item }">
        {{ item.i }}
      </template>
    </grid-layout>
  </div>
  <button @click="submit()">submit</button>
</template>

<script>
import ListAction from "../views/button/index.vue";
export default {
  components: {
    ListAction: ListAction,
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 2, i: 0 },
        { x: 2, y: 0, w: 2, h: 4, i: 1 },
        { x: 4, y: 0, w: 2, h: 5, i: 2 },
        { x: 6, y: 0, w: 2, h: 3, i: 3 },
        { x: 8, y: 0, w: 2, h: 3, i: 4 },
        { x: 8, y: 0, w: 2, h: 3, i: 5 },
        { x: 0, y: 5, w: 2, h: 5, i: 6 },
        { x: 2, y: 5, w: 2, h: 5, i: 7 },
        { x: 4, y: 5, w: 2, h: 5, i: 8 },
        { x: 6, y: 3, w: 2, h: 4, i: 9 },
      ],
      draggable: true,
      resizable: true,
      colNum: 12,
      index: 0,
    };
  },
  mounted() {
    // this.$gridlayout.load();
    this.index = this.layout.length;
  },
  methods: {
    addItem: function () {
      // Add a new item. It must have a unique key!
      this.layout.push({
        x: (this.layout.length * 2) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12), // puts it at the bottom
        w: 2,
        h: 2,
        i: this.index,
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
    },
    removeItem: function (val) {
      const index = this.layout.map((item) => item.i).indexOf(val);
      this.layout.splice(index, 1);
    },
    submit() {
      console.log(this.layout);
      localStorage.setItem("layout", JSON.stringify(this.layout));
      this.$router.push("/consumer");
    },
  },
};
</script>

<style>
.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}
.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}
/*************************************/
.remove {
  position: absolute;
  right: 2px;
  top: 0;
  cursor: pointer;
}
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
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
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
