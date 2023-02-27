<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <main class="w-screen min-h-screen">
    <Navbar />
    <RouterView />
  </main>
</template>
