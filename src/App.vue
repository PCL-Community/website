<script setup lang="ts">

</script>

<template>
  <Navbar />
  <div class="mt-15">
    <RouterView />
  </div>
  <Footer />
</template>

<style>
.dark {
  body {
    background-color: #1a202c;
    color: white;
  }
}
</style>
