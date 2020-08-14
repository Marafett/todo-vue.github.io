<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-header">
        <span><h2>Создать группу</h2></span>
      </div>
      <div class="popup-content">
        <form @submit.prevent="submitCreateGroup">
          <input v-model="title" type="text" placeholder="Название группы" />
          <button
            class="btn btn-primary"
            type="submit"
            v-bind:disabled="!title"
            v-bind:class="{ disabled: !title }"
          >
            Создать
          </button>
          <button class="btn btn-danger" @click="closePopup">Отмена</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    title: "",
  }),
  methods: {
    ...mapActions(["createGroup"]),
    closePopup() {
      this.$emit("closePopup");
    },
    submitCreateGroup() {
      const group = {
        title: this.title,
      };

      this.createGroup(group);
      this.closePopup();
    },
  },
};
</script>
