<template>
  <div id="app">
    <div class="container">
      <h2>Задачи</h2>
      <hr />
      <CreatePopup v-if="isPopupVisible" @closePopup="closePopup" />
      <button class="btn btn-primary" @click="createNote">Создать</button>
      <div class="main">
        <div class="main-route">
          <router-view />
        </div>
        <div class="main-group">
          <NavGroup />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavGroup from "./components/Nav-group";
import CreatePopup from "./components/Create-popup";
export default {
  data: () => ({
    isPopupVisible: false,
  }),
  methods: {
    createNote() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
  components: { NavGroup, CreatePopup },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  font-family: "Roboto", sans-serif;
  background: rgb(250, 250, 255);
  .container {
    max-width: 1100px;
    margin: 0 auto;
    .main {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .main-route {
        width: 75%;
        display: block;
      }
      .main-group {
        width: 20%;
        border: 1px dotted #ccc;
        border-radius: 5px;
      }
    }
  }
}
.popup-wrapper {
  background: rgba(80, 80, 80, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .popup {
    padding: 16px;
    position: fixed;
    border-radius: 5px;
    top: 50px;
    max-width: 500px;
    min-width: 300px;
    background: #ffffff;
    box-shadow: 0 0 17px #e7e7e7;
    &-header {
      display: flex;
      align-items: center;
    }
    &-content {
      display: flex;
      align-items: center;
      textarea {
        min-height: 100px;
      }
      input,
      select,
      textarea {
        width: 100%;
        border-left: none;
        background: #fff;
        border-top: none;
        border-right: none;
        outline: none;
        margin-bottom: 10px;
        padding: 0.4rem;
        font-size: 1.2rem;
        border-bottom: 1px solid #ccc;
        &:focus {
          border-color: rgb(10, 10, 10);
        }
      }
    }
  }
}
.btn {
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius: 3px;
  &:hover {
    opacity: 0.7;
  }
}
.btn-primary {
  background: green;
  color: #fff;
}
.btn-danger {
  background: red;
  color: #fff;
}
.btn-blue {
  background: rgb(53, 53, 255);
  color: #fff;
}
.disabled {
  opacity: 0.2;
  &:hover {
    opacity: 0.2;
  }
}
</style>
