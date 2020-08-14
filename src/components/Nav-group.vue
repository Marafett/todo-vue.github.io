<template>
  <div class="main-nav">
    <GroupPopup v-if="isPopupVisible" @closePopup="closePopup" />
    <DelGroupPopup v-if="isPopupVisibleGroup" @closePopup="closePopup" />
    <h2>Группы</h2>
    <button class="btn btn-primary" @click="createGroup">Создать</button>
    <button class="btn btn-danger" @click="deleteGroup">&times;</button>
    <ul class="list-group">
      <router-link tag="li" to="/">все</router-link>
      <router-link
        tag="li"
        v-for="(group, idx) of groups"
        :key="idx"
        :to="'/group/' + group.title"
      >
        {{ group.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GroupPopup from "../components/Group-popup";
import DelGroupPopup from "../components/DelGroup-popup";
export default {
  data: () => ({
    isPopupVisible: false,
    isPopupVisibleGroup: false,
  }),
  methods: {
    createGroup() {
      this.isPopupVisible = true;
    },
    deleteGroup() {
      this.isPopupVisibleGroup = true;
    },
    closePopup() {
      this.isPopupVisible = false;
      this.isPopupVisibleGroup = false;
    },
  },
  computed: {
    ...mapGetters(["groups"]),
  },
  components: { GroupPopup, DelGroupPopup },
};
</script>

<style scoped lang="scss">
.main-nav {
  text-align: center;
  .list-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
    li {
      display: block;
      cursor: pointer;
      &:hover {
        background: rgb(233, 240, 253);
        border-radius: 10px;
      }
    }
  }
}
.router-link-exact-active {
  background: rgb(155, 190, 255);
  border-radius: 10px;
}
</style>
