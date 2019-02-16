<template>
  <div>
    <div class="cascader">
      <div class="trigger" @click="popoverVisible=!popoverVisible">
        
      </div>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items :items="source" class="popover" :height="popoverHeight"></cascader-items>
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
    },
    popoverHeight: {
      type: String
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
    border: 1px solid black;
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
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    @extend .box-shadow;
  }
}
</style> 
