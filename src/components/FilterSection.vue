<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 items-center h-[80px] rounded-[6px] dark:bg-dark-blue bg-white w-full"
  >
    <div
      class="flex items-center w-full h-full px-4 md:pl-8 md:border-r-[1px] border-r-[0px] md:border-r-dark-grey gap-4"
    >
      <img src="/assets/desktop/icon-search.svg" />
      <input
        class="border-none outline-none w-[90%] dark:bg-dark-blue dark:text-white dark:placeholder:text-white placeholder:text-base placeholder:text-dark-blue placeholder:opacity-[0.5]"
        placeholder="Filter by title, companies, expertise…"
      />
    </div>
    <div
      class="md:flex hidden items-center w-full h-full pl-5 md:pl-8 border-r-[1px] md:border-r-dark-grey gap-4"
    >
      <img src="/assets/desktop/icon-location.svg" />
      <input
        class="border-none outline-none w-[160px] dark:bg-dark-blue dark:text-white dark:placeholder:text-white placeholder:text-base placeholder:text-dark-blue placeholder:opacity-[0.5]"
        placeholder="Filter by location"
      />
    </div>
    <div class="md:flex hidden items-center h-full px-5 md:px-6 lg:px-8 gap-4">
      <div class="flex h-6 gap-1 justify-between w-full">
        <input
          type="checkbox"
          class="border-none outline-none accent-violet dark:bg-dark-blue dark:placeholder:text-white w-6 h-6 placeholder:text-base placeholder:text-dark-blue placeholder:opacity-[0.5]"
          placeholder="Filter by location"
        />
        <label class="text-base font-bold mr-4 w-full dark:text-white">
          Full Time
        </label>
      </div>
      <button
        class="bg-violet rounded-[5px] text-base font-bold text-white h-12 px-6 md:px-6 lg:px-9 ml-auto"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
