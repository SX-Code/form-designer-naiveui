<template>
  <div class="_fc_color_picker">
    <n-color-picker
      :value="modelValue"
      :default-value="defaultValue"
      :swatches="swatches"
      @update:value="updateValue"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: [String],
    defaultValue: [String],
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue, defaultValue } = props;
    const swatches = ref([
      '#FFCC33',
      '#18A058',
      '#8b0000'
    ])
    function updateValue() {
      emit('update:modelValue', modelValue);
    }
    return {
      updateValue,
      defaultValue,
      swatches
    }
  },
})
</script>
