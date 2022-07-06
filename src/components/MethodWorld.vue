<template>
    <div>
        <h1>{{getName()}}</h1>
        <h1>{{getName2("Varin2")}}</h1>
        <h1>
            <p>{{getNameAll()}}</p>
            <p>{{getNameAll().name}}</p>
            <p>{{getNameAll().email}}</p>
            <p>{{getNameAll().email2}}</p>
        </h1>
    </div>
</template>

<script>
export default {
    name : "MethodWorld",
    data(){
        return{
            email: "varinchea@gmail.com"
        }
    },
    methods:{
        getName(){
            return "Varin"
        },
         getName2(name){
            return name
        },
         getNameAll(){
            return {
                name:'varin',
                email: 'cheavarin@gmail.com',
                email2: this.email
            }
        }
    }
    
}
</script>