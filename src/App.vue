<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div
    class="w-screen min-h-screen bg-[#f4f6f8] dark:bg-midnight overflow-scroll"
  >
    <Navbar />
    <RouterView />
  </div>
</template>
