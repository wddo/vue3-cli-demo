<template>
  <div class="btnWrap">
    <button
      v-bind="$attrs"
      class="large"
    >
      MyButton
    </button>
  </div>
</template>

<script>
import { useAttrs, watch } from "vue";

export default {
  inheritAttrs: false,
  setup() {
    const attrs = useAttrs();
    console.log(attrs);

    /* const onWatch = (value) => {
      console.log(value);
    }; */

    //watch(attrs, onWatch);

    return {
      attrs,
    };
  },
  updated(value) {
    console.log("updated", this.attrs);
  },
};
</script>

<style lang="scss" scoped>
.btnWrap {
  margin: 1rem;

  .btns {
    border: 2px solid black;
  }

  .red {
    color: red;
  }

  .large {
    font-size: 2rem;
    font-weight: 600;
  }
}
</style>
