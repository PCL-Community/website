<template>
  <PCLCard class="max-w-xl max-h-xl">
    <div class="text-center">
      <img
        class="mb-5 max-w-md h-auto"
        v-if="props.preview"
        :src="props.preview"
        loading="lazy"
      />
    </div>
    <div class="flex space-x-6 items-center">
      <img :src="props.icon" class="w-20 h-20 max-w-full h-auto" loading="lazy" />
      <div>
        <div class="font-bold text-2xl">{{ props.title }}</div>
        <p>{{ props.description }}</p>
        <slot />
      </div>
    </div>
  </PCLCard>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  preview: String,
  icon: String,
});
</script>
