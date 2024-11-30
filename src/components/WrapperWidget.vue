<template>
  <div :class="wrapperClass" class="border border-blue-500 min-h-[400px]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "column", // Default to vertical layout
    },
  },
  computed: {
    wrapperClass() {
      return {
        flex: true,
        "flex-col": this.direction === "column",
        "flex-row": this.direction === "row",
      };
    },
  },
};
</script>

<style scoped>
/* Additional custom styles can be added here if necessary */
</style>
