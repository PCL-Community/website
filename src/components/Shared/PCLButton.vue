<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  type?: "primary" | "secondary";
}>();
const buttonType = computed(() => props.type || "secondary");
</script>

<template>
  <button
    :class="[
      'pcl-button',
      buttonType === 'primary'
        ? 'pcl-button-primary'
        : '',
      buttonType === 'secondary'
        ? 'border-gray-500 hover:border-[#66ccff] bg-transparent hover:bg-[#cceeff] hover:dark:bg-[#005580] hover:text-[#66ccff]'
        : '',
    ]"
  >
    <slot />
  </button>
</template>
