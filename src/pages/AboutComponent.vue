<template>
  <Suspense>
    <component
      :is="page"
      v-if="page"
    />

    <template #fallback>
      <LoadingComponent />
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent, Suspense, h } from "vue";

const LoadingComponent = () => {
  return h("div", null, "loading ...");
};

const PHistory = defineAsyncComponent({
  loader: () => {
    return import("./about/p_history.vue");
  },
});

const PCompany = defineAsyncComponent({
  loader: () => {
    return import("./about/p_company.vue");
  },
});

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {
    Suspense,
    LoadingComponent,
    PHistory,
    PCompany,
  },
  props: {
    page: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped></style>
