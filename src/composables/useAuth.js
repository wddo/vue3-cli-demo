import { onlogin } from "@/api/auth";
import { ref } from "vue";

export default function useAuth() {
  const isLogin = ref(false);

  const requestLogin = (data) => {
    onlogin(data).then((res) => {
      isLogin.value = true;
    });
  };

  return { isLogin, requestLogin };
}
