<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/auth">
      Auth
    </router-link> |
    <router-link to="/about">
      About
    </router-link> |
    <router-link to="/composition">
      Composition
    </router-link> |
    <router-link to="/teleport">
      Teleport
    </router-link> |
    <router-link to="/booking">
      Booking
    </router-link>
  </nav>
  <router-view />
</template>

<script setup>
import { onBeforeMount } from "vue";
import { refreshToken } from "@/api/auth";

onBeforeMount(() => {
  console.log("app onBeforeMount");

  if ($cookies && $cookies.get("isLogin")) {
    console.log("refresh isLogin", $cookies.get("isLogin"));
    refreshToken();
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  > nav {
    padding: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
