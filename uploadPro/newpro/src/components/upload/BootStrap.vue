<template>
  <div class="container">
    <h1 class="alert alert-primary">{{ msg }}</h1>
    <button class="btn btn-primary">确定</button>
  </div>
</template>

<script>
export default {
  name: 'BootStrap',
  data () {
    return {
      msg: 'BootStrap'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
