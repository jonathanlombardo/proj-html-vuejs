<script>
export default {
  props: {
    text: String,
  },

  emits: ["btn-clicked"],
};
</script>

<template>
  <button @click="$emit('btn-clicked')">{{ text }}</button>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/var" as *;

button {
  font-size: inherit;
  padding: $space-m $space-l;
  color: inherit;
  cursor: pointer;

  &:hover {
    // opacity: 0.8;
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(1);
  }
}
</style>
