<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-header">
        <span><h2>Удалить задачу?</h2></span>
      </div>
      <hr />
      <div class="popup-content">
        <button class="btn btn-primary" @click="deleteNote">удалить</button>
        <button class="btn btn-danger" @click="closePopup">отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["taskId"],
  methods: {
    ...mapActions(["deleteTask"]),
    closePopup() {
      this.$emit("closePopup");
    },
    deleteNote() {
      this.deleteTask(this.taskId);
      this.closePopup();
    },
  },
};
</script>
