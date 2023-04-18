<template>
  <n-config-provider style="height: 100vh" :locale="naiveLanguage" :date-locale="dateLanguage">
    <div id="app">
      <div class="_fc-t-header">
        <img class="_fc-t-logo" src="http://form-create.com/logo.png" />
        <div class="_fc-t-name">form-create-designer-naiveui</div>
        <div class="_fc-t-menu">
          <n-space>
            <n-button size="small" ghost @click="setJson"> 导入JSON</n-button>
            <n-button size="small" ghost @click="setOption"> 导入Options</n-button>
            <n-button size="small" secondary type="info" @click="showJson">生成JSON</n-button>
            <n-button size="small" secondary type="success" @click="showOption">生成Options</n-button>
            <n-button size="small" secondary type="error" @click="showTemplate">生成组件</n-button>
            <n-button size="small" ghost @click="changeLocale">中英切换</n-button>
          </n-space>
        </div>
      </div>
      <fc-designer ref="designer" :locale="locale" />

      <n-modal
        v-model:show="state"
        preset="dialog"
        :show-icon="false"
        :title="title[type]"
        class="_fc-t-dialog"
        style="width: 600px"
      >
        <template v-if="isLoading">
          <n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />
        </template>
        <div ref="editor" v-if="state" v-show="isLoading === false"></div>
        <span style="color: red;" v-if="err">输入内容格式有误!</span>
        <template #action v-if="type > 2">
          <n-space>
            <n-button @click="state = false" size="small">取 消</n-button>
            <n-button type="primary" @click="onOk" size="small">确 定</n-button>
          </n-space>
        </template>
      </n-modal>
    </div>
  </n-config-provider>
</template>

<script>
import { enUS, NConfigProvider, dateZhCN, zhCN } from 'naive-ui'
import is from '@form-create/utils/lib/type';
import jsonlint from "jsonlint-mod";
import { javascript } from "@codemirror/lang-javascript";
import { json } from '@codemirror/lang-json';
import { basicSetup, EditorView } from "codemirror";

import formCreate from "@form-create/naive-ui";
import ZhCn from "../src/locale/zh-cn";
import En from "../src/locale/en";
import dateEnUs from 'naive-ui/es/locales/date/enUS';

const TITLE = [
  "生成规则",
  "表单规则",
  "生成组件",
  "设置生成规则",
  "设置表单规则",
];

export default {
  name: "app",
  components: [ NConfigProvider ],
  data() {
    return {
      state: false,
      value: null,
      title: TITLE,
      editor: null,
      err: false,
      type: -1,
      lang: "cn",
      locale: null,
      isLoading: false,
      languageDict: {
        cn: zhCN,
        en: enUS
      },
      dateLanguageDict: {
        cn: dateZhCN,
        en: dateEnUs
      },
      naiveLanguage: zhCN,
      dateLanguage: dateZhCN
    };
  },
  watch: {
    state(n) {
      if (!n) {
        this.value = null;
        this.err = false;
      }
    },
    value() {
      this.load();
    },
  },
  methods: {
    changeLocale() {
      if (this.lang === "cn") {
        this.locale = En;
        this.lang = "en";
        this.naiveLanguage = this.languageDict["en"];
        this.dateLanguage = this.dateLanguageDict["en"]
      } else {
        this.locale = ZhCn;
        this.lang = "cn";
        this.naiveLanguage = this.languageDict["cn"];
        this.dateLanguage = this.dateLanguageDict["cn"]
      }
    },
    load() {
      let val;
      if (this.type === 2) {
        val = this.value;
      } else if (this.type === 0) {
        val = formCreate.toJson(this.value, 2);
      } else {
        val = JSON.stringify(this.value, null, 2);
      }
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
    insertCommandContent(val) {
      this.editor.dispatch({
        changes: {
          from: 0,
          to: this.editor.state.doc.length,
          insert: val || "Press Ctrl-Space in here...\n"
        },
      })
    },
    onValidationError(e) {
      this.err = e.length !== 0;
    },
    showJson() {
      this.state = true;
      this.type = 0;
      this.value = this.$refs.designer.getRule();
    },
    showOption() {
      this.state = true;
      this.type = 1;
      this.value = this.$refs.designer.getOption();
    },
    showTemplate() {
      this.state = true;
      this.type = 2;
      this.value = this.makeTemplate();
    },
    setJson() {
      this.state = true;
      this.type = 3;
      this.value = [];
    },
    setOption() {
      this.state = true;
      this.type = 4;
      this.value = { form: {} };
    },
    onOk() {
      if (this.err) return;
      const json = this.editor.state.doc;
      let val = JSON.parse(json);
      if (this.type === 3) {
        if (!Array.isArray(val)) {
          this.err = true;
          return;
        }
        this.$refs.designer.setRule(formCreate.parseJson(json));
      } else {
        if (!is.Object(val) || !val.form) {
          this.err = true;
          return;
        }
        this.$refs.designer.setOption(val);
      }
      this.state = false;
    },
    makeTemplate() {
      const rule = this.$refs.designer.getRule();
      const opt = this.$refs.designer.getOption();
      return `<template>
  <form-create
    v-model="fapi"
    :rule="rule"
    :option="option"
    @submit="onSubmit"
  ></form-create>
</template>

<script>
import formCreate from "@form-create/naive-ui";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const fapi = ref(null);
    const rule = ref(formCreate.parseJson('${formCreate.toJson(rule).replaceAll("\\", "\\\\")}'));
    const option = ref(formCreate.parseJson('${JSON.stringify(opt)}'));

    function onSubmit (formData) {
      // TODO 提交表单
    }

    return {
      fapi,
      rule,
      option,
      onSubmit,
    }
  },
<\/script>`;
    },
  },
  beforeCreate() {
    window.jsonlint = jsonlint;
  },
};
</script>

<style>
#app {
  height: 100%;
}
._fc-t-header {
  height: 60px;
  margin: 0 20px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: default;
}

._fc-t-logo {
  height: 26px;
}

._fc-t-name {
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
}

._fc-t-menu {
  position: absolute;
  right: 0;
}

._fc-t-menu i {
  font-size: 12px;
}

body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex !important;
  flex-direction: column !important;
}

#app {
  display: flex;
  flex-direction: column;
  flex: 1;
}

._fc-copyright {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  border-top: 1px solid #ececec;
  background-color: #fff;
  cursor: pointer;
}

._fc-t-dialog .CodeMirror {
  height: 450px;
}
.CodeMirror-line {
  /* line-height: 16px !important; */
  /* font-size: 13px !important; */
}

.CodeMirror-sizer {
  /* line-height: 16px !important; */
  /* font-size: 13px !important; */
}

.CodeMirror-lint-tooltip {
  z-index: 2021 !important;
}

._fc-t-dialog .el-dialog__body {
  padding: 0px 20px;
}

._fc-b-item {
  display: flex;
}
</style>
