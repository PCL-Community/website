<script lang="ts" setup>
import { useTitle } from "@vueuse/core";

useTitle("未找到页面 | PCL 非官方社区");
</script>

<template>
  <div class="mx-auto h-50 prose mt-50 text-center">
    <h1>404 未找到页面</h1>
    <p>呃……这个页面不存在呢，请检查你是否输入了正确的链接。</p>
    <p>
      如果你确定这不应该出现，你应该<a
        href="https://github.com/PCL-Community/PCL-Community.github.io/issues/new/choose"
        target="_blank"
        >反馈问题</a
      >。
    </p>
    <RouterLink to="/"
      ><PCLButton type="primary">返回首页</PCLButton>
    </RouterLink>
  </div>
</template>

<style></style>
