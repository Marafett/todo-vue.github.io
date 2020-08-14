<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="popup-header">
        <span><h2>Удалить группу?</h2></span>
      </div>
      <div class="popup-content">
        <select v-model="value">
          <option
            v-for="group of groups"
            :key="group.title"
            :value="group.title"
            >{{ group.title }}</option
          >
        </select>
        <small v-if="value"
          >Задачи из этой группы перейдут в категорию (без группы)</small
        >
        <div>
          <button
            class="btn btn-primary"
            @click="deleteGroups"
            v-bind:disabled="!value"
            v-bind:class="{ disabled: !value }"
          >
            удалить
          </button>
          <button class="btn btn-danger" @click="closePopup">отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    value: "",
  }),
  methods: {
    ...mapActions(["deleteGroup"]),
    closePopup() {
      this.$emit("closePopup");
    },
    deleteGroups() {
      this.deleteGroup(this.value);
      this.closePopup();
    },
  },
  computed: {
    ...mapGetters(["groups"]),
  },
};
</script>

<style scoped>
.popup-content {
  display: flex;
  flex-direction: column;
}
small {
  margin-bottom: 1rem;
}
</style>
