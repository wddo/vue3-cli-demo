<template>
  <nav>
    <ul>
      <li>
        <button @click="changePage('history-view')">
          history
        </button>
      </li>
      <li>
        <button @click="changePage('company-view')">
          company
        </button>
      </li>
    </ul>
  </nav>
  <hr>
  <SubView :page="currentPage" />
</template>

<script>
import SubView from "@/views/about/SubView";

export default {
  components: {
    SubView,
  },
  data() {
    return {
      currentPage: "history-view",
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  margin-top: 1rem;

  ul {
    display: flex;
    justify-content: center;

    > li {
      padding: 1rem;
    }
  }
}
</style>
