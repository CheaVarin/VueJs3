<template>
    <div>
        <p v-if="error.length">
            <b>Please correct the floowing errors</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                      {{ e }}
                </li>
            </ul>
        </p>
        <form @submit="login">
         <input type="text" placeholder="enter name" v-model="name"><br><br>
         <input type="password" placeholder="Enter password" v-model="password"> <br><br>
         <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'ValidationWorld',
    data(){
        return{
            error:[],
            name:null,
            password:null
        }
    },
    methods:{
        login(e){
            if(this.name && this.password){
                console.log("Login function called")
            }
            this.error=[];
            if(!this.name){
                this.error.push("name is reqired")
            }
             if(!this.password){
                this.error.push("password is reqired")
            }
            console.log("error",this.error)
            e.preventDefault()
        }
    }
}
</script>