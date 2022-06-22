<template>
    <div>
        <input type="text" v-model="loginForm.username" placeholder="Enter user name"><br><br>
        <input type="password" v-model="loginForm.password" placeholder="Enter user password"><br><br>
        <button v-on:click="getLogin">Login</button>
    </div>
</template>
<script>
export default {
    name:'LoginWorld',
    data(){
        return {
            loginForm:{
                username:null,
                password:null
            }
        }
    },
    methods: {
        getLogin(){
            console.log('getLogin called',this.loginForm.username,this.loginForm.password)
        }
    }
}
</script>