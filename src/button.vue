<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click='on'>
        <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
        <g-icon class="lodaing" v-if="lodaing" name="lodaing"></g-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
export default {
  // props:['icon','iconPosition'],
  props:{
    "icon":{},
    "iconPosition":{
      type:String,
      default:"left",
      validator(value){
        return (value === "left" || value === "right")
      }
    },
    lodaing:{
      type:Boolean,
      default:false
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
  
  &.icon-right{
    > .content{order:1}
    > .icon{order:2;margin-right: 0; margin-left: .1em}
  }
  .lodaing{
    animation: spin 2s infinite linear;
  }
}
</style>
