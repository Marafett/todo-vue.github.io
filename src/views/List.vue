<template>
  <div>
    <DeletePopup
      v-if="isPopupVisible"
      @closePopup="closePopup"
      v-bind:taskId="taskId"
    />
    <div class="search-control">
      <input
        class="search"
        type="search"
        v-model="search"
        placeholder="поиск по названию"
      />
      <select class="search" v-model="complete">
        <option value="" selected>все</option>
        <option value="true">завершенные</option>
        <option value="false">незавершенные</option>
      </select>
    </div>
    <div v-if="taskss.length > 0">
      <div
        class="card"
        :class="{ done: task.completed }"
        v-for="task of taskss"
        :key="task.id"
      >
        <div class="card-content">
          <h4>
            {{ task.title }} <small>({{ task.group }})</small>
          </h4>
          <p class="text">{{ task.text }}</p>
        </div>
        <div class="card-actions">
          <router-link tag="button" class="btn" :to="'/task/' + task.id"
            >подробнее</router-link
          >
          <button
            class="btn btn-blue"
            @click="task.completed = !task.completed"
          >
            <div v-if="!task.completed">закончить</div>
            <div v-else>отмена</div>
          </button>
          <button class="btn btn-danger" @click="deleteTask(task.id)">
            удалить
          </button>
        </div>
      </div>
    </div>
    <div
      class="no-taskss"
      v-else-if="
        (search.length && !taskss.length) || (complete && !taskss.length)
      "
    >
      задачи не найдены
    </div>
    <div class="no-taskss" v-else>Вы еще не создали здесь задачи</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DeletePopup from "../components/Delete-popup";
export default {
  name: "List",
  data: () => ({
    isPopupVisible: false,
    taskId: null,
    search: "",
    complete: "",
  }),
  methods: {
    deleteTask(id) {
      this.taskId = id;
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
  computed: {
    ...mapGetters(["tasks"]),
    taskss() {
      if (this.$route.name === "List") {
        return this.status;
      }
      return this.status.filter((t) => t.group === this.$route.params.name);
    },
    searchTask() {
      return this.tasks.filter((t) => {
        return t.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    status() {
      if (this.complete === "true") {
        return this.searchTask.filter((t) => t.completed === true);
      }
      if (this.complete === "false") {
        return this.searchTask.filter((t) => t.completed === false);
      }
      return this.searchTask;
    },
  },
  components: { DeletePopup },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  border: #ccc 1px dotted;
  border-radius: 5px;
  margin: 0.7rem 0;
}
.done {
  background: rgb(255, 177, 177);
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.card-content {
  max-width: 400px;
}
.no-taskss {
  text-align: center;
  margin-top: 3rem;
}
.search {
  border-left: none;
  background: #fff;
  border-top: none;
  border-right: none;
  outline: none;
  margin: 10px;
  padding: 0.4rem;
  font-size: 1rem;
  border-bottom: 1px solid #ccc;
  &:focus {
    border-color: rgb(10, 10, 10);
  }
}
.search-control {
  display: flex;
  justify-content: center;
}
</style>
