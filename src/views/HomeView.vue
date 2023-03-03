<script lang="ts">
import FilterSection from "@/components/FilterSection.vue";
import Card from "@/components/Card.vue";

export default {
  components: {
    FilterSection,
    Card,
  },
  data() {
    return {
      jobLists: this.$store.state.jobLists,
    };
  },
  methods: {
    goToDetails(id: string) {
      this.$router.push(`/job/${id}`);
    },
  },
};
</script>

<template>
  <div
    class="h-[80px] mt-[-40px] lg:px-[165px] md:px-[40px] px-[24px] mb-[80px]"
  >
    <FilterSection />

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[70px] mt-[80px] pb-[80px] md:pb-[206px]"
    >
      <Card
        class="grid-item col-1"
        v-for="job in jobLists"
        :key="job.id"
        :location="job.location"
        :logo="job.logo"
        :company="job.company"
        :time="job.postedAt"
        :contract="job.contract"
        :position="job.position"
        :logoBgColor="job.logoBackground"
        @click="goToDetails(job.id)"
      />
    </div>
  </div>
</template>
