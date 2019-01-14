<template>
  <div class="cascaderItem">
    <div>{{sourceItem.name}}</div>
    <div v-if="sourceItem.children">
      <gulu-cascader-item
        v-for="(item,index) in sourceItem.children"
        :key="index"
        :source-item="item"
      ></gulu-cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluCascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
.cascaderItem {
  border: 1px solid red;
  margin: 10px;
}
</style>