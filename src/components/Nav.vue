<style scoped>
  .header{
    height: 5rem;
    background-color: skyblue;
    color: white;
    font-size: 1.5rem;
  }

  .subHeader{
    width: 90%;
    margin: auto;
    display: flex;
    padding-top: 1.5rem;
  }

  .logo{
  }

  .people{
    flex: 1;
    text-align: right;
  }

</style>
<template>
  <div class="header">
    <div class="subHeader">
      <p class="logo">浙江万里学院</p>
      <div class="people">
        欢迎您：xxx
        <a href="#">退出</a>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  computed: {}
}
</script>
