<template>
  <span class="userName">{{ user }}</span>
  <div>
    <div class="filters">
      <RepositoriesFilters />
      <RepositoriesSortBy />
    </div>
    <hr>
    <RepositoriesList :repositories="repositories" />
  </div>
</template>

<script>
import RepositoriesFilters from "@/components/repositories/RepositoriesFilters.vue";
import RepositoriesSortBy from "@/components/repositories/RepositoriesSortBy.vue";
import RepositoriesList from "@/components/repositories/RepositoriesList.vue";

import useUserRepositories from "@/composables/repositories/useUserRepositories";
import useRepositoryNameSearch from "@/composables/repositories/useRepositoryNameSearch";

import { toRefs } from "vue";

export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { type: String, default: "" },
  },
  setup(props) {
    let { user } = toRefs(props);

    const { repositories } = useUserRepositories(user);
    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories);

    return {
      repositories: repositoriesMatchingSearchQuery,
      searchQuery,
    };
  },
  data() {
    return {
      filters: {}, // 3
    };
  },
  computed: {
    filteredRepositories() {
      // 3
      return [];
    },
  },
  methods: {
    updateFilters() {
      // 3
    },
  },
};
</script>

<style lang="scss" scoped>
.userName {
  margin-left: 0.5rem;
}

.filters {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>
