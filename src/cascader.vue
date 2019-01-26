<template>
  <div class="root">
    <slot></slot>
    <div v-for="(item,index) in source" :key="index">
      <cascaderItem :aaa="item"></cascaderItem>
    </div>
  </div>
</template>

<script>
import cascaderItem from "./cascader-item";
export default {
  props: {
    source: {
      type: Array
    }
  },
  components: {
    cascaderItem: cascaderItem
  }
};
</script>

<style scoped>
.root {
  /* border: solid 1px; */
}
</style>
