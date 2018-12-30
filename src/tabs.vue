<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name:"tabs",
    props:{
        selected:{
            type:String,
            required:true
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value)>=0
            }
        }
    },
    data(){
        return{
            eventBus:new Vue(),
            test:'asdas1d231asd23a1sd'
        }
    },
    provide(){
        return {
            eventBus:this.eventBus,
            test:this.test
        }
    },
    created(){
        console.log('this :', this);
        console.log('this.eventBus :', this.eventBus);
        // this.$emit('update:selected','xxx')
    }
}
</script>

<style>

</style>
