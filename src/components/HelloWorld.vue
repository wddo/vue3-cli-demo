<template>
  <div>
    <dynamic-heading level="4">
      {{ msg }}
    </dynamic-heading>
    <child-component v-model="myName" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";
import DynamicHeading from "./DynamicHeading";

export default {
  name: "HelloWorld",
  components: {
    ChildComponent,
    DynamicHeading,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      myName: "Parent",
    };
  },
};
</script>

<style scoped></style>
