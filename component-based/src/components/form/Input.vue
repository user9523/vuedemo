<template>
  <div>
    <input type="text" :value="value" @input="onInput" />
  </div>
</template>
<script>
export default {
  // 清除默认父级继承的DOM属性
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      dafault: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // 派发事件触发监听 验证
      this.$parent.$emit("validate");
    }
  }
};
</script>
<style lang="scss" scoped></style>
