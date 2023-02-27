<template>
  <div
    class="bg-white rounded-[6px] px-8 flex flex-col pb-8 min-h-[228px] cursor-pointer"
  >
    <div
      class="w-[50px] h-[50px] rounded-[15px] mb-6 mt-[-25px] flex justify-center items-center px-[5px]"
      :style="style"
    >
      <img :src="logo" :alt="company" class="w-full" />
    </div>
    <div class="flex items-center gap-3">
      <p class="text-base font-normal leading-[19px] text-dark-grey">
        {{ time }}
      </p>
      <div class="w-1 h-1 rounded-full bg-dark-gey" />
      <p class="text-base font-normal leading-[19px] text-dark-grey">
        {{ contract }}
      </p>
    </div>
    <h3 class="mt-[13px] font-bold text-lg leading-[25px] mb-[17px]">
      {{ position }}
    </h3>
    <p class="text-base font-normal leading-[19px] text-dark-grey">
      {{ company }}
    </p>
    <h4 class="mt-auto text-violet text-sm font-bold">{{ location }}</h4>
  </div>
</template>

<script lang="ts">
import { toRefs, defineProps, computed } from "vue";
interface CardProps {
  position: string;
  company: string;
  location: string;
  logo: any;
  time: any;
  contract: string;
  logoBgColor: string;
}
// const props = defineProps<CardProps>();
export default {
  props: {
    position: String,
    company: String,
    location: String,
    logo: String,
    time: String,
    contract: String,
    logoBgColor: String,
  },
  computed: {
    style() {
      return "background-color: " + this.logoBgColor;
    },
  },
};
</script>
