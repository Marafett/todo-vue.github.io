<template>
  <div>
    <h1>{{ task.title }}</h1>
    <p>{{ task.text }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskId(+this.$route.params.id);
    },
  },
};
</script>

<style scoped></style>
