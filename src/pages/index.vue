<script setup lang="ts">
import { useTitle } from "@vueuse/core";

useTitle("首页 | PCL 非官方社区");
</script>

<template>
  <div class="prose mx-auto mt-50">
    <div class="text-center">
      <h1>PCL 非官方社区</h1>
      <div>非官方的 PCL 社区用户开发者组织</div>
      <div class="space-x-5 my-5">
        <PCLButton type="primary">了解更多</PCLButton>
        <a href="https://github.com/PCL-Community" target="_blank"
          ><PCLButton>GitHub</PCLButton></a
        >
      </div>
    </div>
    <blockquote>Lorem ipsum dolor sit amet eos amet ut zzril.</blockquote>
    <h2 class="text-center">我们的项目</h2>
  </div>
  <div class="flex justify-center space-x-6">
    <PCLProjectCard
      title="PCL2 社区版"
      description="PCL2 社区版，可体验上游暂未合并的功能"
      preview="/PCL-CE-Preview.png"
      icon="/PCL-CE-Logo.png"
      ><div class="space-x-5">
        <a href="https://github.com/PCL-Community/PCL2-CE/releases/latest" target="_blank"><PCLButton type="primary">下载</PCLButton></a>
        <a href="https://github.com/PCL-Community/PCL2-CE" target="_blank"><PCLButton>源代码</PCLButton></a>
      </div></PCLProjectCard
    >
  </div>
  <div class="prose mx-auto">
    <h2>关于我们</h2>
    <p>
      Lorem ipsum dolor sit amet amet lorem invidunt congue dolor diam stet et
      autem justo at dolor. Nam esse elit duis quod. Ut kasd tincidunt et. Autem
      erat et et sed stet sit dolor sadipscing enim sed. Illum qui rebum sanctus
      sadipscing vero est te ut sea feugiat illum sit qui et eu. Sanctus
      consetetur accusam facilisis imperdiet lorem lorem kasd dolor sit ut duo
      sed et at. Amet amet in magna aliquyam veniam dolores et consetetur
      sanctus. Diam sit ea rebum sed at vero stet aliquam volutpat. Ut justo ea
      consetetur sit diam lorem iriure et. Et et magna aliquam rebum ea sea stet
      eum justo ut facer voluptua at dolor eos accusam consetetur kasd.
    </p>
    <AppLink href="https://github.com/PCL-Community">GitHub</AppLink>
  </div>
</template>
