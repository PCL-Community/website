<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from '@vueuse/core'

const isDrawerOpen = ref(false);
const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full bg-[#66ccff]/30 backdrop-blur-sm shadow-lg z-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <div class="hidden lg:block">
          <div class="flex items-center">
            <span class="flex items-center justify-center">
              <img
                src="/icon.png"
                width="28"
                height="28"
                alt="Site favicon"
                loading="lazy"
              />
            </span>
            <span class="ml-2 text-xl font-bold">PCL Community</span>
            <div class="ml-10 space-x-2 text-md">
              <RouterLink to="/"
                ><span
                  class="pcl-menu-item"
                  >首页</span
                ></RouterLink
              >
              <RouterLink to="/blog"
                ><span
                  class="pcl-menu-item"
                  >新闻</span
                ></RouterLink
              >
              <RouterLink to="/download"
                ><span
                  class="pcl-menu-item"
                  >下载</span
                ></RouterLink
              >
              <a
                href="https://github.com/PCL-Community/PCL2-1930"
                target="_blank"
                ><span
                  class="pcl-menu-item"
                  >常见难检反馈</span
                ></a>
            </div>
          </div>
        </div>
        <div class="hidden lg:block space-x-2">
          <span @click="toggleDark()"
            class="items-center justify-center h-full pcl-menu-item"
          >
            <span class="i-ri-contrast-2-line text-xl"></span>
          </span>
          <span
            class="items-center justify-center h-full pcl-menu-item"
          >
            <a href="https://github.com/PCL-Community" target="_blank"
              ><span class="i-ri-github-line text-xl"></span
            ></a>
          </span>
        </div>
        <div class="flex items-center block lg:hidden">
          <span
            @click="toggleDrawer"
            class="hover:bg-gray-500/20 px-2 py-1 rounded-md transition-colors cursor-pointer flex items-center justify-center"
            ><i class="i-ri-menu-fill text-xl"></i
          ></span>
          <span class="flex items-center justify-center">
            <img
              src="/icon.png"
              width="28"
              height="28"
              alt="Site favicon"
              loading="lazy"
              class="ml-2"
            />
          </span>
          <span class="ml-2 text-xl font-bold">PCL Community</span>
        </div>
      </div>
    </div>
  </nav>
  <transition name="fade">
    <div
      v-if="isDrawerOpen"
      class="fixed inset-0 bg-black/50 z-40"
      @click="toggleDrawer"
    ></div>
  </transition>
  <transition name="slide-left">
    <div
      v-if="isDrawerOpen"
      class="drawer rounded-r-lg fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 dark:text-white shadow-lg z-50 slide-left-enter-active slide-left-leave-active"
    >
      <div class="p-4">
        <div class="flex items-center justify-between">
          <span class="text-xl font-bold">菜单</span>
          <span @click="toggleDrawer" class="cursor-pointer"
            ><i class="i-ri-close-fill text-xl"></i
          ></span>
        </div>
        <div class="mt-4 space-y-2 text-md">
          <RouterLink to="/" @click="toggleDrawer"
            ><span
              class="block pcl-menu-item"
              >首页</span
            ></RouterLink
          >
          <RouterLink to="/blog" @click="toggleDrawer"
            ><span
              class="block pcl-menu-item"
              >新闻</span
            ></RouterLink
          >
          <RouterLink to="/download" @click="toggleDrawer"
            ><span
              class="block pcl-menu-item"
              >下载</span
            ></RouterLink
          >
          <a
            href="https://github.com/PCL-Community/PCL2-1930"
            target="_blank"
            @click="toggleDrawer"
            ><span
              class="block pcl-menu-item"
              >常见难检反馈</span
            ></a
          >
          <div>
            <span
            class="space-x-5 h-full w-fit pcl-menu-item"
          >
            <a href="https://github.com/PCL-Community" target="_blank"
              ><span class="i-ri-github-line text-xl"></span
            ></a>
              </span>
          <span @click="toggleDark()"
            class="items-center justify-center h-full pcl-menu-item"
          >
            <span class="i-ri-contrast-2-line text-xl"></span>
          </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.2s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-left-enter-to,
.slide-left-leave {
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drawer {
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
