/* eslint-disable */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <button @click="toUpload" class="btn btn-danger">to upload page</button>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to index'
    }
  },
  methods:{
    toUpload(){
      this.$router.push({path:"upload"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
