<template>
  <div>
    <g-input></g-input>
    <g-input error='请输入密码'></g-input>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  },
  data() {
    return {
      content: `
            <g-input></g-input>
            <g-input error='请输入密码'></g-input>
            `
        .replace(/\t+| +/g, "")
        .trim()
    };
  }
};
</script>

<style>
</style>
