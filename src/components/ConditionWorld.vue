<template>
    <h1 v-if="show">Conditional Rendering in Vue js</h1>
    <!-- <h1 v-else >Conditional Rendering in Vue js 3333</h1> -->
    <button v-on:click="display">Toogle</button>
</template>

<script>
export default {
    name:'ConditionWorld',
    data(){
        return{
           show:false
        } 
    },
    methods:{
        display(){
            this.show=!this.show
       
        }
    }
    
}
</script>