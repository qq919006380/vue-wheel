<template>
  <div>
    <div class="cascader">
      <div class="trigger" @click="popoverVisible=!popoverVisible">s</div>
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>
import cascaderItem from "./cascader-item";
export default {
  components: {
    cascaderItems: cascaderItem
  },
  props: {
    source: {
      type: Array
    }
  },
  data() {
    return {
      popoverVisible: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "var";
.cascader {
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover {
    border: 2px solid green;
    height: 200px;
    display: flex;
    .label {
      white-space: nowrap;
    }
  }
}
</style> 
