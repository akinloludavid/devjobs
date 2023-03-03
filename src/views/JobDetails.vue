<template>
  <div class="xl:px-[355px] lg:px-[120px] md:px-[40px] px-6">
    <div
      class="mx-auto mt-[-40px] md:h-[140px] h-full pb-8 md:pb-[0px] rounded-[6px] flex md:flex-row flex-col items-center bg-white dark:bg-dark-blue mb-8"
    >
      <div
        class="md:w-[140px] md:h-[140px] w-[50px] mt-[-25px] md:mt-[0px] h-[50px] rounded-[15px] flex justify-center items-center md:rounded-l-[6px] md:rounded-r-[0px]"
        :style="logoBgStyle"
      >
        <img :src="jobDetails.logo" :alt="jobDetails.company" class="w-[60%]" />
      </div>
      <div
        class="flex md:flex-row flex-col items-center px-[40px] items-center w-full justify-between mt-6 md:mt-[0px]"
      >
        <div>
          <h3
            class="font-bold md:text-xl text-center md:text-left text-lg dark:text-white text-dark-blue mb-[13px]"
          >
            {{ jobDetails.company }}
          </h3>
          <p class="text-base text-dark-grey">{{ jobDetails.website }}</p>
        </div>
        <button
          class="text-base font-bold text-violet dark:text-white py-4 px-[20px] dark:bg-[#FFFFFF01] bg-[#5964E010] rounded-[5px]"
        >
          Company Site
        </button>
      </div>
    </div>
    <div
      class="mx-auto rounded-[6px] md:p-12 p-6 py-[40px] md:py-12 bg-white dark:bg-dark-blue mb-[80px]"
    >
      <div class="flex-col md:flex-row flex items-center mb-[40px]">
        <div class="w-full md:w-auto">
          <div class="flex items-center gap-3">
            <p class="text-base font-normal text-dark-grey">
              {{ jobDetails.postedAt }}
            </p>
            <div class="w-1 h-1 rounded-full bg-dark-grey" />
            <p class="text-base font-normal text-dark-grey">
              {{ jobDetails.contract }}
            </p>
          </div>
          <h2
            class="md:text-2xl text-x; font-bold mt-8 leading-[35px] mb-2 dark:text-white text-dark-blue"
          >
            {{ jobDetails.position }}
          </h2>
          <p class="text-violet text-sm font-bold leading-[17px]">
            {{ jobDetails.location }}
          </p>
        </div>
        <button
          class="bg-violet mt-[50px] md:mt-[0] rounded-[5px] w-full md:w-auto text-base font-bold text-white h-12 px-6 md:px-6 lg:px-9 ml-auto"
        >
          Apply Now
        </button>
      </div>
      <div class="mb-[40px]">
        <p class="text-base font-normal text-dark-grey">
          {{ jobDetails.description }}
        </p>
      </div>
      <div>
        <h3
          class="font-bold text-xl leading-[25px] mb-[23px] dark:text-white text-dark-blue"
        >
          Requirements
        </h3>
        <p class="text-base font-normal text-dark-grey mb-6">
          {{ jobDetails.requirements.content }}
        </p>
        <ul class="list-disc">
          <li
            class="text-base font-normal text-dark-grey mb-2 flex items-center gap-4"
            v-for="item in jobDetails.requirements.items"
            :key="item"
          >
            <div class="w-1 h-1 bg-violet rounded-full" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mt-8">
        <h2 class="text-xl font-bold text-dark-blue dark:text-white mb-[23px]">
          What You Will Do
        </h2>
        <p class="text-base font-normal text-dark-grey mb-6">
          {{ jobDetails.role.content }}
        </p>
        <ul class="list-decimal list-inside">
          <li
            class="text-base font-normal text-dark-grey mb-2"
            v-for="item in jobDetails.role.items"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    class="xl:px-[355px] lg:px-[120px] md:px-[40px] dark:bg-dark-blue dark:text-white px-6 h-[96px] bg-white flex items-center justify-between"
  >
    <div class="hidden md:block">
      <h3 class="text-xl font-bold text-dark-blue dark:text-white mb-3">
        {{ jobDetails.position }}
      </h3>
      <p class="text-base font-normal text-dark-grey">
        {{ jobDetails.company }}
      </p>
    </div>
    <button
      class="bg-violet w-full md:w-auto rounded-[5px] text-base font-bold text-white h-12 px-6 md:px-6 lg:px-9 ml-auto"
    >
      Apply Now
    </button>
  </div>
</template>

<script>
import db from "../data.json";
export default {
  data() {
    return {
      jobDetails: db.filter(
        (el) => String(el.id) === this.$route.params.jobId
      )[0],
    };
  },
  computed: {
    logoBgStyle() {
      return "background-color: " + this.jobDetails.logoBackground;
    },
  },
};
</script>

<style></style>
