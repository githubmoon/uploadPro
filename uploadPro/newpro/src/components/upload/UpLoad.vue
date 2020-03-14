<template>
  <div class="hello">
     <h1>{{ msg }}</h1>
     <hr>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'UpLoad',
  data () {
    return {
      msg: 'upload'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
