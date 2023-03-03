<template>
  <nav
    class="bg-[url('/assets/mobile/bg-pattern-header.svg')] md:bg-[url('/assets/desktop/bg-pattern-header.png')] h-[161px] w-full flex md:pt-[45px] px-6 pt-8 justify-between md:px-[100px] outline-none"
  >
    <img
      @click="goHomePage"
      class="h-8 cursor-pointer"
      src="/assets/desktop/logo.svg"
      alt="devjobs logo"
    />
    <div class="flex flex-row py-[0px] h-fit items-center gap-4">
      <img
        class="cursor-pointer"
        src="/assets/desktop/icon-sun.svg"
        alt="light icon"
        @click="setLightMode"
      />
      <div
        @click="toggleMode"
        class="h-6 w-12 rounded-full bg-white dark:bg-dark-blue flex items-center px-1 cursor-pointer"
      >
        <div class="rounded-full h-[14px] ml-0 dark:ml-6 w-[14px] bg-violet" />
      </div>
      <img
        class="cursor-pointer"
        src="/assets/desktop/icon-moon.svg"
        alt="dark icon"
        @click="setDarkMode"
      />
    </div>
  </nav>
</template>

<script lang="ts" d>
export default {
  methods: {
    goHomePage() {
      this.$router.push("/");
    },
    setLightMode() {
      this.$store.commit("setLightMode");
    },
    setDarkMode() {
      this.$store.commit("setDarkMode");
    },
    toggleMode() {
      this.$store.commit("toggleMode");
    },
  },
};
</script>

<style></style>
