<template>
  <div>
    <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <g-cascader :source="source" popover-height="200px" :selected.sync="selected"></g-cascader>
    <p>222</p>
  </div>
</template>

<script>
import Button from "./button";
import Cascader from "./cascader";
import db from "./db";
function ajax(parentId = 0) {
  return db.filter(item => item.parent_id == parentId);
}
console.log(ajax());
export default {
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source:ajax()
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-raduis: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

#app {
  margin: 20px;
}

body {
  font-size: var(--font-size);
}
</style>
