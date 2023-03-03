<template>
  <div class="">
    <div
      class="w-[730px] mx-auto mt-[-40px] h-[140px] rounded-[6px] flex items-center bg-white mb-8"
    >
      <div
        class="w-[140px] h-[140px] flex justify-center items-center rounded-l-[6px]"
        :style="logoBgStyle"
      >
        <img :src="jobDetails.logo" alt="" class="w-[60%]" />
      </div>
      <div
        class="flex items-center px-[40px] items-center w-full justify-between"
      >
        <div>
          <h3 class="font-bold text-xl text-dark-blue mb-[13px]">
            {{ jobDetails.company }}
          </h3>
          <p class="text-base text-dark-grey">{{ jobDetails.website }}</p>
        </div>
        <button
          class="text-base font-bold text-violet py-4 px-[20px] bg-[#5964E010] rounded-[5px]"
        >
          Company Site
        </button>
      </div>
    </div>
    <div class="w-[730px] mx-auto rounded-[6px] p-12 bg-white mb-[80px]">
      <div class="flex items-center mb-[40px]">
        <div>
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
            class="text-2xl font-bold mt-8 leading-[35px] mb-2 text-dark-blue"
          >
            {{ jobDetails.position }}
          </h2>
          <p class="text-violet text-sm font-bold leading-[17px]">
            {{ jobDetails.location }}
          </p>
        </div>
        <button
          class="bg-violet rounded-[5px] text-base font-bold text-white h-12 px-6 md:px-6 lg:px-9 ml-auto"
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
        <h3 class="font-bold text-xl leading-[25px] mb-[23px] text-dark-blue">
          Requirements
        </h3>
        <p class="text-base font-normal text-dark-grey mb-6">
          {{ jobDetails.requirements.content }}
        </p>
        <ul class="list-disc ml-4">
          <li
            class="text-base font-normal text-dark-grey mb-2 pl-6"
            v-for="item in jobDetails.requirements.items"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mt-8">
        <h2 class="text-xl font-bold text-dark-blue mb-[23px]">
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
    <div class="px-[355px] h-[96px] bg-white flex items-center justify-between">
      <div>
        <h3 class="text-xl font-bold text-dark-blue mb-3">
          {{ jobDetails.position }}
        </h3>
        <p class="text-base font-normal text-dark-grey">
          {{ jobDetails.company }}
        </p>
      </div>
      <button
        class="bg-violet rounded-[5px] text-base font-bold text-white h-12 px-6 md:px-6 lg:px-9 ml-auto"
      >
        Apply Now
      </button>
    </div>
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
