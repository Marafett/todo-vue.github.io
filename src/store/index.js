import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    groups: [],
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, id) {
      const delTask = state.tasks.findIndex((n) => n.id === id);
      state.tasks.splice(delTask, 1);
    },
    createGroup(state, group) {
      state.groups.push(group);
    },
    deleteGroup(state, group) {
      state.tasks.map((t) => {
        if (t.group === group) {
          t.group = "без группы";
        }
      });
      const delGroup = state.groups.findIndex((g) => g.title === group);
      state.groups.splice(delGroup, 1);
    },
  },
  actions: {
    createTask({ commit }, task) {
      commit("createTask", task);
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
    },
    createGroup({ commit }, group) {
      commit("createGroup", group);
    },
    deleteGroup({ commit }, group) {
      commit("deleteGroup", group);
    },
  },
  getters: {
    tasks: (state) => state.tasks,
    groups: (state) => state.groups,
    taskId: (state) => (id) => state.tasks.find((t) => t.id === id),
  },
});
