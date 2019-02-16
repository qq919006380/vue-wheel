<template>
  <div>
    <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <g-cascader :source="source" popover-height='200px' :selected="selected" @update:selected='selected=$event'></g-cascader>
    <p>222</p>
  </div>
</template>

<script>
import Button from "./button";
import Cascader from "./cascader";
export default {
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      selected:[],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
            },
            {
              name: "嘉兴",
              children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
          ]
        }
      ]
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
