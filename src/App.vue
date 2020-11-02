<template>
  <div id="app">
    <router-view />
    <div class="axios">
      <img v-bind:src="img" alt="camera" />
    </div>
    <div class="v-bind">
      <h1>v-bind</h1>
      <span v-bind:title="message" v-on:click="() => test2()">
        {{ message }}
        <button v-on:click="reverseMessage">뒤집기</button>
      </span>
    </div>
    <div class="v-if">
      <h1>v-if</h1>
      <p v-if="seen">볼 수 있다.</p>
      <button v-on:click="seen = !seen">toggle seen</button>
    </div>
    <div class="v-for v-bind:key">
      <h1>v-for, v-bind:key</h1>
      <ol>
        <li v-bind:key="todo.text" v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div class="v-model">
      <h1>v-model</h1>
      <p>{{ value }}</p>
      <input type="text" v-model="value" />
    </div>
    <div class="component">
      <hello-world />
      <ol>
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        />
      </ol>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TodoItemVue from "./components/TodoItem.vue";
import HelloWorldVue from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      img: "",
      message: "QWEqwe123",
      seen: true,
      todos: [
        { text: "JavaScript 배우기" },
        { text: "Vue 배우기" },
        { text: "무언가 멋진 것을 만들기" },
      ],
      value: "",
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
  methods: {
    async test2() {
      try {
        const res = await axios.get("http://localhost:8080/image/16", {
          responseType: "blob",
        });
        const reader = new FileReader();
        reader.readAsDataURL(res.data);
        reader.onload = () => {
          const imageDataUrl = reader.result;
          this.img = imageDataUrl;
        };
      } catch (err) {
        console.log(err);
      }
    },
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
  components: {
    "hello-world": HelloWorldVue,
    "todo-item": TodoItemVue,
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}
#app > div {
  margin: 20px 0;
  > h1 {
    margin-bottom: 20px;
  }
}
.axios > img {
  width: 200px;
}
</style>
