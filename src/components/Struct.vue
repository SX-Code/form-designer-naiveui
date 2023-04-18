<template>
  <div class="_fc_struct">
    <n-button @click="visible = true" style="width: 100%">{{
      title || t("struct.title")
    }}</n-button>
    <n-modal
      v-model:show="visible"
      preset="dialog"
      :show-icon="false"
      :title="title || t('struct.title')"
      style="width: 500px"
    >
      <template v-if="isLoading">
        <n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />
      </template>
      <div ref="editor" v-if="visible" v-show="!isLoading"></div>
      <span class="_fc_err" v-if="err">
        {{ t("struct.error") }}{{ err !== true ? err : "" }}
      </span>
      <template #action>
        <span class="dialog-footer">
          <n-space>
            <n-button @click="visible = false" size="small">{{
              t("struct.cancel")
            }}</n-button>
            <n-button type="primary" @click="onOk" size="small">{{
              t("struct.submit")
            }}</n-button>
          </n-space>
        </span>
      </template>
    </n-modal>
  </div>
</template>
<script>
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { basicSetup, EditorView } from "codemirror";
import { deepParseFn, toJSON } from "../utils/index";
import { deepCopy } from "@form-create/utils/lib/deepextend";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Struct",
  props: {
    modelValue: [Object, Array, Function],
    title: String,
    defaultValue: {
      require: false,
    },
    validate: Function,
  },
  inject: ["designer"],
  data() {
    return {
      editor: null,
      visible: false,
      err: false,
      oldVal: null,
      t: this.designer.setupState.t,
      isLoading: false,
    };
  },
  watch: {
    modelValue() {
      this.load();
    },
    visible(n) {
      if (n) {
        this.load();
      } else {
        this.err = false;
      }
    },
  },
  methods: {
    load() {
      const val = toJSON(
        this.modelValue
          ? deepParseFn(deepCopy(this.modelValue))
          : this.defaultValue
      );
      this.oldVal = val;
      this.$nextTick(() => {
        this.initCodeContent(val);
      });
    },
    initCodeContent(val) {
      this.isLoading = true;
      setTimeout(() => {
        if (this.editor) {
          this.editor.destroy();
        }
        this.editor = new EditorView({
          doc: val || 'Press Ctrl-Space in here...\n',
          extensions: [
            basicSetup,
            javascript(),
            json(),
          ],
          parent: this.$refs.editor,
          options: {
            lineNumbers: true,
            line: true,
            //括号匹配
            matchBrackets: true,
          },
        });
        this.isLoading = false;
      }, 500);
    },
    onOk() {
      const str = this.editor.state.doc;
      let val;
      try {
        val = eval("(function (){return " + str + "}())");
      } catch (e) {
        this.err = ` (${e})`;
        return;
      }
      console.log(this.validate);
      if (this.validate && false === this.validate(val)) {
        this.err = true;
        return;
      }
      this.visible = false;
      if (toJSON(val, null, 2) !== this.oldVal) {
        this.$emit("update:modelValue", val);
      }
    },
  },
});
</script>

<style>
._fc_struct {
  width: 100%;
}
._fc_err {
  color: red;
  float: left;
  text-align: left;
  width: 65%;
}
</style>
