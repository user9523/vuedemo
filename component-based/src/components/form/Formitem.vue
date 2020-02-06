<template>
  <div>
    <!-- 占位显示 -->
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>
import Schema from "async-validator";
export default {
  // 拿取值
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  mounted() {
    this.$on("validate", this.validate);
  },
  methods: {
    validate() {
      // 做校验
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      // npm i async-validator -s
      const desc = { [this.prop]: rules };
      const schema = new Schema(desc);
      // return 的是校验结果的promise对象
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = "";
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
