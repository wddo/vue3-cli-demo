<template>
  <div v-if="!isLogin">
    <form @submit="goLogin">
      <fieldset>로그인</fieldset>
      <div>
        <label for="username">아이디</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="아이디를 입력하세요"
          value="admin"
        >
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input
          id="password"
          ref="password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
        >
      </div>
      <button type="submit">
        로그인
      </button>

      <iframe
        hidden
        name="hiddenIframe"
      />
    </form>
  </div>
  <div v-else>
    안녕하세요.
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";
import useAuth from "@/composables/useAuth";

const { isLogin, requestLogin } = useAuth();

onMounted(() => {
  isLogin.value = !!axios.defaults.headers["Authorization"];
});

function goLogin(e) {
  const data = new FormData(e.target);
  const formData = Object.fromEntries(data.entries());

  requestLogin(formData);

  e.preventDefault();
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
  }

  label {
    padding-right: 1rem;
  }

  input:not([type="submit"]) {
    margin-left: auto;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
}
</style>
