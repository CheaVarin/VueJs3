<template>
    <h1>Evnet in vue</h1>
    <button v-on:click="hello">Hello</button>
</template>
<script>
export default {
    methods: {
        hello(){
            alert('My name is Varin')
        }
    }
}
</script>