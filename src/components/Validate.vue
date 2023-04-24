<template>
  <DragForm
    class="_fc-validate"
    :rule="rule"
    :option="option"
    :modelValue="formValue"
    @update:modelValue="onInput"
  ></DragForm>
</template>

<script>
import { designerForm } from "../utils/form";
import { defineComponent } from "vue";
import { deepCopy } from "@form-create/utils/lib/deepextend";

export default defineComponent({
  name: "Validate",
  inject: ["designer"],
  props: {
    modelValue: Array,
  },
  components: {
    DragForm: designerForm.$form(),
  },
  watch: {
    modelValue(n) {
      this.formValue = this.parseValue(n);
    },
  },
  data() {
    const t = this.designer.setupState.t;
    return {
      formValue: {},
      t,
      option: {
        form: {
          labelPlacement: "top",
          size: "small",
          showFeedback: true,
        },
        submitBtn: false,
        appendValue: true,
        formData: this.parseValue(this.modelValue),
      },
      rule: [
        {
          type: "select",
          field: "type",
          value: "",
          title: t("validate.type"),
          options: [
            { value: "", label: t("validate.typePlaceholder") },
            { value: "string", label: "String" },
            { value: "array", label: "Array" },
            { value: "number", label: "Number" },
            { value: "integer", label: "Integer" },
            { value: "float", label: "Float" },
            { value: "object", label: "Object" },
            { value: "date", label: "Date" },
            { value: "url", label: "url" },
            { value: "hex", label: "hex" },
            { value: "email", label: "email" },
          ],
          control: [
            {
              handle: (v) => {
                return !!v;
              },
              rule: [
                {
                  type: "group",
                  field: "validate",
                  props: {
                    expand: 1,
                    rule: [
                      {
                        type: "select",
                        title: t("validate.trigger"),
                        field: "trigger",
                        value: "change",
                        options: [
                          { label: "change", value: "change" },
                          { label: "submit", value: "submit" },
                          { label: "blur", value: "blur" },
                        ],
                      },
                      {
                        type: "hidden",
                        field: "validator",
                        value: undefined,
                      },
                      {
                        type: "select",
                        title: t("validate.mode"),
                        field: "mode",
                        options: [
                          {
                            value: "required",
                            label: t("validate.modes.required"),
                          },
                          {
                            value: "pattern",
                            label: t("validate.modes.pattern"),
                          },
                          { value: "min", label: t("validate.modes.min") },
                          { value: "max", label: t("validate.modes.max") },
                          { value: "len", label: t("validate.modes.len") },
                        ],
                        value: "required",
                        control: [
                          {
                            value: "required",
                            rule: [
                              {
                                type: "hidden",
                                field: "required",
                                value: true,
                              },
                            ],
                          },
                          {
                            value: "pattern",
                            rule: [
                              {
                                type: "input",
                                field: "pattern",
                                title: t("validate.modes.pattern"),
                              },
                            ],
                          },
                          {
                            value: "min",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "min",
                                title: t("validate.modes.min"),
                              },
                            ],
                          },
                          {
                            value: "max",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "max",
                                title: t("validate.modes.max"),
                              },
                            ],
                          },
                          {
                            value: "len",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "len",
                                title: t("validate.modes.len"),
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "input",
                        title: t("validate.message"),
                        field: "message",
                        value: "",
                        children: [
                          {
                            type: "span",
                            slot: "suffix",
                            inject: true,
                            class: "append-msg",
                            on: {
                              click: (inject) => {
                                const title =
                                  this.designer.setupState.activeRule.title;
                                if (this.designer.setupState.activeRule) {
                                  inject.api.setValue(
                                    "message",
                                    t(
                                      inject.api.form.mode !== "required"
                                        ? "validate.autoMode"
                                        : "validate.autoRequired",
                                      { title }
                                    )
                                  );
                                }
                              },
                            },
                            children: [t("validate.auto")],
                          },
                        ],
                      },
                    ],
                  },
                  value: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onInput: function (formData) {
      let val = [];
      const { validate, type } = deepCopy(formData);
      if (type && (!validate || !validate.length)) {
        return;
      } else if (type) {
        validate.forEach((v) => {
          v.type = type;
        });
        val = [...validate];
      }
      this.$emit("update:modelValue", val);
    },
    parseValue(n) {
      let val = {
        validate: n ? [...n] : [],
        type: n.length ? n[0].type || "string" : undefined,
      };
      val.validate.forEach((v) => {
        if (!v.mode) {
          Object.keys(v).forEach((k) => {
            if (["message", "type", "trigger", "mode"].indexOf(k) < 0) {
              v.mode = k;
            }
          });
        }
      });

      return val;
    },
  },
});
</script>

<style>
._fc-validate .append-msg {
  cursor: pointer;
}
._fc-validate .form-create .n-form-item {
  grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
  grid-template-columns: minmax(0, 100%);
  --n-blank-height: 28px !important;
  --n-label-height: 24px !important;
}
._fc-validate .form-create .n-form-item .n-form-item-label {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  --n-blank-height: 24px;
  --n-label-text-align: flex-start;
  --n-label-font-size: 13px;
  --n-label-padding: 0 0 6px 2px;
}
._fc-validate .n-base-selection {
  --n-height: 28px !important;
}
._fc-validate .n-input .n-input__input-el, ._fc-validate .n-input .n-input__suffix {
  --n-height: 28px !important;
}
._fc-validate .n-grid > div:nth-child(2) {
  flex-direction: column;
  justify-content: center;
}
</style>
