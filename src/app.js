import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Cascader from "./cascader";

Vue.component("g-button", Button);
Vue.component("g-cascader", Cascader);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-inputp", Input);
Vue.component("g-col", Col);
Vue.component("g-row", Row);
Vue.component("g-toast", Toast);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);

Vue.use(plugin);
new Vue({
  el: "#app",
  components: { "icon":Icon },

  data: {
    selectedTab: "sports",
    selected: "angular",
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
  }
});
