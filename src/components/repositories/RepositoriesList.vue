<template>
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
export default {
  props: {
    repositories: {
      type: Array,
      default: Array.from({ length: 0 }),
    },
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
