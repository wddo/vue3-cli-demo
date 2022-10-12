<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
    <router-link to="/composition">
      Composition
    </router-link> |
    <router-link to="/teleport">
      Teleport
    </router-link>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 1rem;
}
</style>
