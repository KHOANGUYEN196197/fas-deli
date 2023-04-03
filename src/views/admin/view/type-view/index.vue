<template>
  <div
    @click="handleClick(type.actionText)"
    class="custom-btn"
    style="font-size: 24px"
    v-if="type.type === 'button'"
  >
    {{ type.text }}
  </div>
  <div v-if="type.type === 'paragraph'">{{ type.text }}</div>
</template>

<script>
export default {
  name: "typeViewC",
  components: {},
  props: {
    type: {
      type: Object,
      required: true,
    },
    isView: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    handleClick(action) {
      if (this.isView) alert(action);
    },
  },
};
</script>

<style scoped>
.custom-btn {
  border: 1px solid #767676;
  border-radius: 4px;
  background: #efefef;
  display: inline;
  padding: 1px 6px;
  cursor: pointer;
}
</style>
