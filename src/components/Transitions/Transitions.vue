<template>
  <div class="transitions">
    <div class="demo">
      <button @click="show = !show">Toggle</button>
      <transition name="fade" appear>
        <p v-if="show">hello</p>
      </transition>
    </div>
    <div id="example-1">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade" :duration="{ enter: 500, leave: 800 }">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce" :duration="1000">
        <p v-if="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </div>
    <div class="example-3">
      <transition name="fade" mode="out-in">
        <button v-if="isTurnOn" @click="isTurnOn = !isTurnOn" key="on">
          on
        </button>
        <button v-else @click="isTurnOn = !isTurnOn" key="off">off</button>
      </transition>
    </div>
    <div class="example-4">
      <input
        type="radio"
        name="radio"
        @click="handleRadio('a')"
        checked
        id="a"
      />
      <label for="a">A</label>
      <input type="radio" name="radio" @click="handleRadio('b')" id="b" />
      <label for="b">B</label>
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="view"></component>
      </transition>
    </div>
    <div class="list-demo">
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transitions",
  components: {
    "v-a": {
      template: "<div>Component A</div>",
    },
    "v-b": {
      template: "<div>Component B</div>",
    },
  },
  data() {
    return {
      show: true,
      isTurnOn: true,
      view: "v-a",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  methods: {
    handleRadio(type) {
      this.view = `v-${type}`;
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
