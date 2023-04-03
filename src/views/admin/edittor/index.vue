<template>
  <div class="wrap-edit">
    <div class="box-editor">
      <div class="type-box" v-if="objEditor.type === 'paragraph'">
        <label>Paragraph Text</label>
        <input class="custom-input" v-model="obj.text" />
      </div>

      <div class="type-box" v-if="objEditor.type === 'button'">
        <label>Button Text</label>
        <input class="custom-input" v-model="obj.text" />
        <label>Alert Message</label>
        <input class="custom-input" v-model="obj.actionText" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EdittorC",
  components: {},
  props: {
    objEditor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      obj: {},
    };
  },
  watch: {
    objEditor: function () {
      this.obj = this.objEditor;
    },
  },
};
</script>

<style scoped>
.box-editor {
  width: 100%;
  background: #ffffff;
  border-top: 1px solid;
  height: 15vh;
}
.custom-input {
  display: block;
  /* margin-left: calc( 100% - 80%); */
  margin-bottom: 16px;
  margin-left: 40px;
  padding: 5px;
  width: 300px;
}
.type-box {
  margin-top: 16px;
  text-align: start;
}
label {
  margin-left: 40px;
}
</style>
