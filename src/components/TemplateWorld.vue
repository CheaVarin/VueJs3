<template>
    <div>
         <p v-html="header"></p>
         <h2 v-once>{{name}}</h2>
         <h2>{{name}}</h2>
         <button v-on:click="hello">Click me</button>
         <h3>{{ok?"yes":"no"}}</h3>
    </div>
</template>
<script>
export default {
    name: "TemplateWorld",
    data(){
        return {
            name:"varin",
            ok:true,
            header:"  <h1>Template in Vue js</h1>"
        }
    },
    methods:{
        hello(){
            this.ok=!this.ok
        }
    }
    
}
</script>