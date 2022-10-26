import { reactive } from "vue";

export const store = reactive({
  count: 0,
});

export const increment = () => {
  store.count++;
};
