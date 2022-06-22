<template>
    <div>
        <input type="text" v-model="signupForm.username" placeholder="Enter user name"><br><br>
        <input type="password" v-model="signupForm.password" placeholder="Enter user password"><br><br>
        <p>Hobbies</p>
        <input type="checkbox" value="travel" id="travel" v-model="signupForm.hobbies">
        <label for="travel"> Travel</label>
        <br><br>
         <input type="checkbox" value="sports" id="sports" v-model="signupForm.hobbies">
        <label for="travel"> Sports</label>
        <br><br>
          <p>Gender</p>
        <input type="radio" value="male" id="male" v-model="signupForm.gender">
        <label for="male"> Male</label>
        <br><br>
         <input type="radio" value="female" id="female" v-model="signupForm.gender">
        <label for="female"> Female</label>
        <br><br>
         <button v-on:click="signupUser">Sign up</button>
        
    </div>
</template>
<script>
export default {
    name: 'SignUpWorld',
    data(){
        return {
            signupForm:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        signupUser(){
             console.log("",this.signupForm)
        }
    }
}
</script>