<template>
  <div>
    <g-input></g-input>
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
            `
        .replace(/\t+| +/g, "")
        .trim()
    };
  }
};
</script>

<style>
</style>
