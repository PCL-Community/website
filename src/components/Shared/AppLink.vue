<template>
    <a v-if="isExternal" :href="props.href" target="_blank" class="text-[#66ccff] after:content-['_↗']">
        <slot />
    </a>
    <RouterLink v-else :to="props.href">
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
    href: string;
}>();

const isExternal = computed(() => {
    return props.href.startsWith('https://') || props.href.startsWith('http://');
});
</script>