<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
import  "./svg";
export default {
    name:"g-icon",
    props:["icon-name"]
}
</script>

<style lang="scss">
.g-icon {
    width: 1em;
    height: 1em
}

</style>
  