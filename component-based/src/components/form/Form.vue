<template>
  <div>
    <!-- 占位显示 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  // 跨层级的传输 传递form
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    // 拿到所有孩子需要校验的过滤留下
    // 最后的promise数组 cb回调函数
    validate(cb) {
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());
      // 所有任务都通过才算通过
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>
<style lang="scss" scoped></style>
