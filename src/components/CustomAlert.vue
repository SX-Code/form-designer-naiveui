<template>
  <n-alert
    :style="[
      {width: width ? `${widthPercent}%` : `${widthPx}px`}, 
      { margin: center ? '0 auto' : '' }
    ]"
  >
    {{ description }}
  </n-alert>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    description: [String],
    width: [Boolean],
    widthPercent: [String],
    widthPx: [String],
    center: [Boolean],
  },
  setup() {},
});
</script>
<style scoped>
</style>