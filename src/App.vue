<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <EventVue/>
  <HelloWorld msg="hello" />
  <ConditionWorld /> -->
  <!-- <LoopWorld /> -->
  <!-- <TemplateWorld /> -->
  <!-- <SyleWorld /> -->
  <!-- <DataBinding/> -->
  <!-- <LoginWorld /> -->
  <!-- <SignUpWorld/> -->
  <!-- <ValidationWorld/> -->
  <FectchDataAPI/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// // import HomeWorld from './components/HomeWorld.vue'
// import EventVue from './components/EventVue.vue'
// import ConditionWorld from './components/ConditionWorld.vue'
// import LoopWorld from './components/LoopWorld.vue'
// import TemplateWorld from './components/TemplateWorld.vue'
// import SyleWorld from './components/StyleWorld.vue'
// import DataBinding from './components/DataBinding.vue'
// import LoginWorld from './components/LoginWorld.vue'
// import SignUpWorld from './components/SignUpWorld.vue'
// import ValidationWorld from './components/ValidationWorld.vue'
import FectchDataAPI from './components/FectchDataAPI.vue'

export default {
  name: 'App',
  components: {
    // EventVue,
    // HelloWorld,
    // HomeWorldd,
    // ConditionWorld,
    // LoopWorld,
    // TemplateWorld,
    // SyleWorld,
    // DataBinding,
    // LoginWorld,
    // SignUpWorld,
    // ValidationWorld,
    FectchDataAPI
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
