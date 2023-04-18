<template>
  <div class="_fc_table_opt">
    <n-data-table :data="modelValue" :columns="columns" size="small" :single-line="false" />
    <n-button text @click="add">
      <template #icon>
        <i class="fc-icon icon-add"></i>
      </template>
      {{ t('tableOptions.add') }}
    </n-button>
  </div>
</template>
<script>
import { NButton, NInput } from "naive-ui";
import { defineComponent, h, inject} from "vue";

export default defineComponent({
  name: "TableOptions",
  inheritAttrs: false,
  props: {
    modelValue: [Object, Array, String]
  },
  emits: ['input', 'update:modelValue'],
  setup(props, { emit }) {
    const t = inject('designer').setupState.t;
    const { modelValue } = props;
    if (!Array.isArray(modelValue)) {
      emit('input', []);
    }

    const createColumns = ({ del }) => {
      return [
        {
          title: "label",
          key: "label",
          render(row, index) {
            return h(NInput, {
              value: row.label,
              onUpdateValue(v) {
                modelValue[index].label = v;
                onInput(row);
              },
            });
          },
        },
        {
          title: "value",
          key: "value",
          render(row, index) {
            return h(NInput, {
              value: row.value.toString(),
              showButton: false,
              onUpdateValue(v) {
                modelValue[index].value = Number(v);
                onInput(row);
              },
            });
          },
        },
        {
          title: "操作",
          key: "action",
          width: 50,
          align: 'center',
          render(_, index) {
            return h(
              NButton,
              {
                text: true,
                size: "small",
                onClick: () => del(index),
              },
              {
                default: () =>
                  h("i", { class: "fc-icon icon-delete" }),
              }
            );
          },
        },
      ];
    };
    const columns = createColumns({
      del (index) {
        del(index)
      }
    })
    function onInput(item) {
      if (item.label && item.value) {
        input()
      }
    }

    function input() {
      emit('update:modelValue', modelValue);
    }

    function add() {
      modelValue.push({
        label: '',
        value: ''
      })
    }

    function del(idx) {
      modelValue.splice(idx, 1);
      input(modelValue);
    }

    return {
      t,
      add,
      columns,
      modelValue,
    }
  },
});
</script>
<style scoped>
._fc_table_opt {
    width: 100%;
}
</style>
