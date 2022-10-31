<template>
  <div>history</div>
  <MyButton
    :class="classes"
    @click="clickHandler"
    @flick="flickHandler"
  />
  <div>
    <button @click="changeColor">
      add red
    </button>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: { MyButton },
  data() {
    return {
      classes: "btns",
    };
  },
  methods: {
    clickHandler() {
      console.log("click MyButton");
    },
    changeColor() {
      this.classes = "btns red";
    },
    flickHandler() {
      console.log("flick!!!");
    },
  },
};
</script>

<style scoped></style>
