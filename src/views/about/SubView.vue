<template>
  <Suspense timeout="0">
    <component
      :is="page"
      v-if="page"
    >
      inner
    </component>

    <template #fallback>
      <LoadingComponent />
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent, Suspense, h } from "vue";

const LoadingComponent = () => {
  return h("div", { class: [{ loading: true }] }, "loading ...");
};

const HistoryView = defineAsyncComponent({
  loader: () => {
    return import("@/views/about/HistoryView.vue");
  },
});

const CompanyView = defineAsyncComponent({
  loader: () => {
    return import("@/views/about/CompanyView");
  },
});

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {
    Suspense,
    LoadingComponent,
    HistoryView,
    CompanyView,
  },
  props: {
    page: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  color: red;
}
</style>
