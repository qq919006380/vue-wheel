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
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast('123',
            {
                closeButton:{
                    text:"知道了",
                    callback(toast){
                        console.log(toast)
                        console.log("用户说他知道了")
                    }
                },
                enableHtml:true,
                autoCloseDelay:1,
                autoClose:false,
                position:position
            })
        }
    },
    
})