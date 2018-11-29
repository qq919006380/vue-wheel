<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click='$emit("click")'>
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading" v-if="loading" name="loading"></g-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
export default {
  // props:['icon','iconPosition'],
  props:{
    "icon":{},
    loading:{
      type:Boolean,
      default:false
    },
    "iconPosition":{
      type:String,
      default:"left",
      validator(value){
        return (value === "left" || value === "right")
      }
    }
    
  },
  data:function(){
    return{
      data:true
    }
  },
  methods:{
    on:function(){
      console.log(this.icon)
    }
  }
  
}
</script>

<style lang="scss">
@keyframes spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
.g-button {
  font-size: var(--font-size);height: var(--button-height);padding: 0 1em;border-radius: var(--border-raduis);
  border: 1px solid var(--border-color);background: var(--button-bg);
  display: inline-flex;justify-content: center;
  align-items: center;vertical-align: bottom;
  padding: 0 1em;
  &:hover {border-color: var(--border-color-hover);}
  &:active {background-color: var(--button-active-bg);}
  &:focus {outline: none;}
  > .content{order:2}
  > .icon{order:1;margin-right: .1em}
  > .loading{order:1;margin-right: .1em}
  
  &.icon-right{
    > .content{order:1}
    > .icon{order:2;margin-right: 0; margin-left: .1em}
    > .loading{order:2;margin-right: 0; margin-left: .1em}
  }
  .loading{
    animation: spin 2s infinite linear;
  }
}
</style>
