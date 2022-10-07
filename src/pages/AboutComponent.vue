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

const PHistory = defineAsyncComponent({
  loader: () => {
    return import("./about/p_history.vue");
  },
});

const PCompany = defineAsyncComponent({
  loader: () => {
    return import("./about/p_company");
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

<style lang="scss" scoped>
.loading {
  color: red;
}
</style>
