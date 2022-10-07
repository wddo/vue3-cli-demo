<template>
  <component
    :is="`h${$props.level}`"
    v-bind="$attrs"
  >
    <slot />
  </component>
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
};
</script>

<style lang="scss" scoped>
h4 {
  padding: 1rem;
}
</style>
