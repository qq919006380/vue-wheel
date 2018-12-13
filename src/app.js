import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Toast from './toast';
import plugin from './plugin';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-inputp',Input)
Vue.component('g-col',Col)
Vue.component('g-row',Row)
Vue.component('g-toast',Toast)

Vue.use(plugin)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:"hi"
    },
    created(){
        
    },
    methods:{
        showToast(){
            this.$toast('我是 message')
        }
    },
})