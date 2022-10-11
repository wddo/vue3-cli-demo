<template>
  <div>
    <div class="filters">
      <RepositoriesFilters />
      <RepositoriesSortBy />
    </div>
    <hr>
    <RepositoriesList />
  </div>
</template>

<script>
import RepositoriesFilters from "@/components/repositories/RepositoriesFilters.vue";
import RepositoriesSortBy from "@/components/repositories/RepositoriesSortBy.vue";
import RepositoriesList from "@/components/repositories/RepositoriesList.vue";

import { fetchUserRepositories } from "@/api/repositories";
import { onMounted, ref, watch, toRefs, computed } from "vue";

export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { type: String, default: "" },
  },
  setup(props) {
    let repositories = ref([]);
    let { user } = toRefs(props);

    const getUserRepositories = async () => {
      repositories.value = await fetchUserRepositories(props.user);
    };

    onMounted(getUserRepositories);
    watch(user, getUserRepositories);

    const searchQuery = ref("");
    const repositoriesMatchingSearchQuery = computed(() => {
      return repositories.value.filter((repository) =>
        repository.name.include(searchQuery.value)
      );
    });

    return {
      repositories,
      getUserRepositories,
      searchQuery,
      repositoriesMatchingSearchQuery,
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
.filters {
  display: flex;
  justify-content: space-around;
}
</style>
