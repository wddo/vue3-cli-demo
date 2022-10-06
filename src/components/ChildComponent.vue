<template>
  <div>I'm {{ im }}</div>
  <div>
    <button @click="clickHandler">
      wddo
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
      required: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      myName: "Child",
    };
  },
  computed: {
    im() {
      return !!this.modelValue.length ? this.modelValue : this.myName;
    },
  },
  methods: {
    clickHandler() {
      this.$emit("update:modelValue", "wddo");
    },
  },
};
</script>

<style scoped></style>
