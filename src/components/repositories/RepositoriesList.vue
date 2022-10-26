<template>
  <button @click="increment">
    count 증가
  </button>
  <div>RepositoriesList</div>
  <ul>
    <li
      v-for="repo in repositories"
      :key="repo.name"
    >
      {{ repo.name }}
    </li>
  </ul>
</template>

<script>
import { increment } from "@/store/store";
export default {
  props: {
    repositories: {
      type: Array,
      default: Array.from({ length: 0 }),
    },
  },
  methods: {
    increment,
  },
};
</script>

<style lang="scss" scoped>
ul {
  > li {
    padding: 0.5rem;
    border-bottom: 1px solid gray;
  }
}
</style>
