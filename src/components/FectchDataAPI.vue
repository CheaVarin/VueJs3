// npm install --save axios vue-axios

<template>
    <div>
        <h1> List</h1>
        <p v-for="item in list" :key="item.id">
            {{ item.id }}
            {{ item.email }}
            {{ item.first_name }}
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'FectchDataAPI',
    data(){
        return {
            list:[]
        }
    },
    async mounted(){
        let result = await axios.get("https://reqres.in/api/users?page=2");
        console.warn(result.data.data)
        this.list=result.data.data
    }

}
</script>