<template>
  <teleport to="body">
    <div
      v-if="opener"
      class="modal"
    >
      <div class="modal__dimed" />
      <div class="modal__inner">
        <div class="modal__head">
          <span>modal title</span>
          <button @click="value = false">
            Close
          </button>
        </div>
        <div class="modal__content">
          <p>I'm a modal!</p>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    opener: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:opener"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:opener", value);
      },
      get() {
        return this.opener;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;

  &__dimed {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &__inner {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }

  &__head {
    display: flex;
    justify-content: space-around;
    background-color: #fff;

    > span {
      width: 100%;
    }
  }

  &__content {
    margin-top: 1rem;
    background-color: #fff;
  }
}

bottom {
  margin-right: 0;
}
</style>
