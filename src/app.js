import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Toast from './toast';
import plugin from './plugin';
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-inputp', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)
Vue.component('g-toast', Toast)
Vue.component('g-tab', Tabs)
Vue.component('g-tab-head', TabsHead)
Vue.component('g-tab-body', TabsBody)
Vue.component('g-tab-item', TabsItem)
Vue.component('g-tab-pane', TabsPane)

Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: "hi"
    },
    created() {

    },
    methods: {
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('123',
                {
                    closeButton: {
                        text: "知道了",
                        callback(toast) {
                            console.log(toast)
                            console.log("用户说他知道了")
                        }
                    },
                    enableHtml: true,
                    autoClose: 3,
                    position: position
                })
        }
    },

})