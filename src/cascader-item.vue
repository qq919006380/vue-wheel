<template>
  <div class="root">
    {{aaa.name}}
    <div v-if="aaa.children">
      <asasdasdd :aaa="item" v-for="(item,index) in aaa.children" :key="index"></asasdasdd>
    </div>
    <!-- {{aaa.name}} -->
    <!-- <div>{{aaa.name}}</div> -->
  </div>
</template>

<script>
export default {
  name: "asasdasdd",
  created() {
    // console.log(this.aaa.name);
  },
  props: {
    aaa: {}
  }
};
</script>

<style>
.root {
  border: solid pink 1px;
  margin: 10px
}
</style>
