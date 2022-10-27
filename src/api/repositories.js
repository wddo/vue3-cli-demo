export const fetchUserRepositories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        [
          {
            name: "vue3",
          },
          {
            name: "jquery",
          },
          {
            name: "nuxt",
          },
        ].sort(() => Math.round(Math.random()) - 0.5)
      );
    }, 1000);
  });
};
