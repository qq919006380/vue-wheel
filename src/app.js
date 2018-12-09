import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-inputp',Input)
Vue.component('g-col',Col)
Vue.component('g-row',Row)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    },
    data:{
        message:"hi"
    }
})