<template>
  <div class="mt-16 w-full">
    <div class="prose py-12 max-w-7xl justify-between m-auto w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div class="order-first text-center lg:text-left">
        <p>{{ hitokoto }}</p>
        <p>
          © {{ new Date().getFullYear() }}
          <a href="https://github.com/PCL-Community" target="_blank"
            >PCL Community</a
          >. All rights reserved.
        </p>
      </div>

      <div class="order-last text-center lg:text-right">
        <p>
          由 <a href="https://cn.vuejs.org" target="_blank">Vue.js</a> 与
          <a href="https://cn.vitejs.dev" target="_blank">Vite.js</a> 强力驱动
        </p>
        Designed by Big_Cake
        <p></p>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const hitokoto = ref("用代码表达言语的魅力，用代码书写山河的壮丽。");

onMounted(async () => {
  const res = await fetch("https://v1.hitokoto.cn");
  const data = await res.json();
  hitokoto.value = data.hitokoto;
});
</script>
