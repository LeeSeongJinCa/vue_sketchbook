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
      <p v-if="seen">
        볼 수 있다.
      </p>
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
          v-bind:class="{ items: item.id }"
        />
      </ol>
    </div>
    {{
      message
        .split(" ")
        .reverse()
        .join("")
    }}
    <div class="dynamicArgument">
      <a v-bind:[attributeName]="url">dynamicArgument</a>
      <p v-on:[eventName]="handleClick">
        click to console.log
      </p>
    </div>
    <div class="shorthand">
      <div class="v-bind">
        <a :href="url">#</a>
      </div>
      <div class="v-on">
        <a @click:event.prevent="handleClick" href="#">#</a>
      </div>
    </div>
    <div class="computed">
      <div class="reversedMessage">
        <p>원본 메시지 : {{ message }}</p>
        <p>역순 메시지: {{ reversedMessage }}</p>
      </div>
      <div class="getter_setter">
        <p>fullName: {{ fullName }}</p>
        <button @click="handleName">change Name</button>
      </div>
    </div>
    <div class="watch">
      <div class="watch-example">
        <p>yes/no 질문을 물어보세요:</p>
        <input type="text" v-model="question" />
        <p>{{ answer }}</p>
      </div>
    </div>
    <div class="style">
      <ul>
        <todo-item
          v-for="item in groceryList"
          v-bind:key="item.id"
          v-bind:todo="item"
          class="tododo"
          :style="{ color: 'red', fontSize: '30px' }"
        />
      </ul>
      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
        flex
      </div>
    </div>
    <div class="v-if">
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>oh, no...</h1>
      <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
    </div>
    <div class="key">
      <template v-if="loginType === 'username'">
        <label>사용자 이름</label>
        <input placeholder="사용자 이름을 입력하세요" key="username" />
      </template>
      <template v-else>
        <label>이메일</label>
        <input placeholder="이메일 주소를 입력하세요" key="email" />
      </template>
      <button @click="handleLoginType">로그인 유형 변경</button>
    </div>
    <div class="v-for">
      <ol>
        <li v-for="(item, i) of items" :key="i">
          {{ i + 1 }}
          :
          {{ item.message }}
        </li>
        <li v-for="(item, i) in items" :key="i + 2">
          {{ i + 1 }}
          :
          {{ item.message }}
        </li>
      </ol>
      <ul>
        <li v-for="(value, name, i) in object" :key="name + i">
          {{ value }} : {{ name }}
        </li>
      </ul>
      <ol style="display: flex;">
        <li v-for="n in numbers" :key="n">{{ n }}</li>
      </ol>
      <ol style="display: flex;">
        <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
      </ol>
      <ol style="display: flex;">
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
      </ol>
    </div>
    <div class="v-on">
      <button @click="counter += 1">Add 1</button>
      <p>버튼을 클릭한 횟수 : {{ counter }}</p>
      <input type="text" @keyup.enter="submit" />
      <br />
      <!-- Alt 또는 Shift와 함께 눌린 경우에도 실행됩니다. -->
      <button @click.ctrl="counter += 1">A</button>

      <!-- Ctrl 키만 눌려있을 때만 실행됩니다. -->
      <button @click.ctrl.exact="counter += 1">A</button>

      <!-- 아래 코드는 시스템 키가 눌리지 않은 상태인 경우에만 작동합니다. -->
      <button @click.exact="counter += 1">A</button>
    </div>
    <div class="v-model">
      <div class="ex1">
        <input
          type="text"
          v-model="message"
          placeholder="여기를 수정해보세요."
        />
        <p>메시지: {{ message }}</p>
      </div>
      <div class="ex2">
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" cols="30" rows="10"></textarea>
      </div>
      <div class="ex3">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
      </div>
      <div class="ex4">
        <input type="checkbox" id="lee" v-model="checkedNames" value="lee" />
        <label for="lee">lee</label>
        <input type="checkbox" id="soo" v-model="checkedNames" value="soo" />
        <label for="soo">soo</label>
        <input type="checkbox" id="zoo" v-model="checkedNames" value="zoo" />
        <label for="zoo">zoo</label>
        <br />
        <span>체크한 이름 : {{ checkedNames }}</span>
      </div>
      <div class="ex4">
        <select id="select" v-model="selected">
          <option value="" disabled>Please select one</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <span>선택함 : {{ selected }}</span>
      </div>
    </div>
    <div class="counter-event-ex">
      <p>{{ total }}</p>
      <button-counter @click.native="log123" v-on:increment="incrementTotal" />
      <button-counter v-on:increment="incrementTotal" />
    </div>
    <div class="customEvent">
      <currency-value v-model="price" />
    </div>
    <!-- Add at 2.2.0 version -->
    <div class="custom-v-model">
      <my-checkbox v-model="checked" value="some value" />
    </div>
    <div class="single_slot">
      <h1>나는 부모 컴포넌트의 제목입니다.</h1>
      <slot-component ref="profile">
        <p>컨텐츠 1</p>
        <p>컨텐츠 2</p>
        <p slot="footer">푸터 정보</p>
      </slot-component>
    </div>
    <div class="reference">
      <slot-component ref="profile" />
    </div>
    <div class="async_component">
      <async-component />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  TodoItem as TodoItemVue,
  HelloWorld as HelloWorldVue,
  ButtonCounter as ButtonCounterVue,
  CurrencyValue as CurrencyValueVue,
  MyCheckbox as MyCheckboxVue,
  SlotComponent as SlotComponentVue,
  AsyncComponent as AsyncComponentVue,
} from "./components";

export default {
  name: "App",
  components: {
    "hello-world": HelloWorldVue,
    "todo-item": TodoItemVue,
    "button-counter": ButtonCounterVue,
    "currency-value": CurrencyValueVue,
    "my-checkbox": MyCheckboxVue,
    "slot-component": SlotComponentVue,
    "async-component": AsyncComponentVue,
  },
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
      attributeName: "href",
      eventName: "click",
      url: "#",
      firstName: "First",
      lastName: "Last",
      question: "",
      answer: "질문을 하기 전 까지는 대답할 수 없습니다.",
      awesome: true,
      ok: true,
      loginType: "username",
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5, 6],
      counter: 0,
      checked: false,
      checkedNames: [],
      selected: "",
      total: 0,
      price: 0,
      profile: "Hello, Lee",
    };
  },
  watch: {
    question: function(newQuestion) {
      this.qeustion = newQuestion;
    },
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
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    handleClick() {
      console.log(123);
    },
    handleName() {
      this.fullName = "Lee SeongJin";
    },
    handleLoginType() {
      if (this.loginType === "username") this.loginType = "email";
      else this.loginType = "username";
    },
    even(numbers) {
      return numbers.filter((n) => n % 2 === 0);
    },
    incrementTotal() {
      this.total += 1;
    },
    log123() {
      console.log(123);
    },
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
    evenNumbers: function() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
  },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // },
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
.items {
  color: red;
}
</style>
