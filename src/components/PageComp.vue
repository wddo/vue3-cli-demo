<template>
  <nav>
    <ul>
      <li>
        <button @click="changePage('p-history')">
          history
        </button>
      </li>
      <li>
        <button @click="changePage('p-company')">
          company
        </button>
      </li>
    </ul>
  </nav>
  <hr>
  <AboutComponent :page="currentPage" />
</template>

<script>
import AboutComponent from "../pages/AboutComponent.vue";

export default {
  components: {
    AboutComponent,
  },
  data() {
    return {
      currentPage: "p-history",
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
