import axios from "axios";

const url = "/auth";

export const onlogin = async (data) => {
  try {
    const res = await axios({
      url,
      method: "post",
      data,
    });

    const result = res.data;

    if (result && result.token) {
      onLoginSucces(result.token);
    }

    return res;
  } catch (error) {
    console.error(error);
  }
};

export const refreshToken = () => {
  onLoginSucces();
};

const onLoginSucces = (token) => {
  axios.defaults.headers["Authorization"] = `Basic YWRtaW46cGFzc3dvcmQxMjM=`;
  if ($cookies) $cookies.set("isLogin", true, "5min");
};
