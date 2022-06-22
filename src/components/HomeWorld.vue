<template>
    <h1>Hello world</h1>
    <h1>{{data}}</h1>
</template>
<script>
export default {
    name : 'home-world',
    props:{
       data: String
    }
}
</script>