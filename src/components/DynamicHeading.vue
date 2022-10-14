<template>
  <component
    :is="`h${$props.level}`"
    v-bind="$attrs"
  >
    <slot />
  </component>
  <button @click="clickColorBtn">
    change color
  </button>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: "1",
      required: true,
    },
  },
  data() {
    return {
      color: "red",
    };
  },
  methods: {
    clickColorBtn() {
      this.color = "blue";
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  display: inline-block;
  padding: 1rem;
  color: v-bind(color);
}

button {
  display: inline-block;
}

::v-slotted(.title) {
  font-weight: 600;
}

::v-global(nav) {
  border: 1px solid gray;
}
</style>
