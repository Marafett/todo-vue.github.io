<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-header">
        <span><h2>Создать запись</h2></span>
      </div>
      <div class="popup-content">
        <form @submit.prevent="submitCreateNote">
          <input v-model="title" type="text" placeholder="Название задачи" />
          <textarea v-model="text" type="text" placeholder="Описание задачи" />
          <p>Выберите группу:</p>
          <select v-if="groups.length > 0" v-model="value">
            <option
              v-for="group of groups"
              :key="group.title"
              :value="group.title"
              >{{ group.title }}</option
            >
          </select>
          <div class="no-groups" v-else>
            <small>Создайте группы, чтобы можно было выбирать...</small>
          </div>
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
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    title: "",
    text: "",
    value: "",
  }),
  computed: {
    ...mapGetters(["groups"]),
  },
  methods: {
    ...mapActions(["createTask"]),
    closePopup() {
      this.$emit("closePopup");
    },
    submitCreateNote() {
      const task = {
        id: Date.now(),
        title: this.title,
        text: this.text,
        group: this.value ? this.value : "без группы",
        completed: false,
      };
      this.createTask(task);
      this.closePopup();
    },
  },
};
</script>

<style scoped lang="scss">
.no-groups {
  margin-bottom: 1rem;
}
</style>
