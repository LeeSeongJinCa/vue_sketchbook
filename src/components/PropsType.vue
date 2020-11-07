<template>
  <input :type="text" />
</template>

<script>
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

export default {
  name: "propsType",
  props: {
    A: Number,
    B: [String, Number],
    C: {
      type: String,
      required: true,
    },
    D: {
      type: Number,
      default: 100,
    },
    E: {
      type: Object,
      // 오브젝트나 배열은 꼭 기본값을 반환하는
      // 팩토리 함수의 형태로 사용되어야 합니다.
      default: function() {
        return { message: " Hello-Props-Type" };
      },
    },
    // 커스텀 유효성 검사
    F: {
      vaildator: function(value) {
        // 값이 항상 아래 세 개의 문자열 중 하나입니다.
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
    typeA: String,
    author: Person,
  },
};
</script>

<style></style>
