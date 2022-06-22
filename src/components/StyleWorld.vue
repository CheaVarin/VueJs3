<template>
    <div>
        <h1 class="vueStyle">Class and Style Bindings</h1>
        <h1 v-bind:style="{color:colorName}">Syle Bindings</h1>
        <h1 v-bind:class="{display:show,vueStyle:show}">Class with Object</h1>
         <h1 v-bind:class="[checkDisplay?d:v]">Class with Array</h1>
    </div>
</template>
<script>
export default {
    name:"SyleWorld",
     data(){
         return{
             colorName:'skyblue',
             show:true,
             d:'display',
             v:'vueStyle',
             checkDisplay:false
         }
     }
}
</script>
<style scoped>
 .vueStyle{
     color:orange
 }
 .display{
     background-color: peru;
     padding: 5px;
 }
</style>