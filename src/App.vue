<style lang="less">
  body,ul,p{
    padding: 0;
    margin: 0;
  }

  ul{
    list-style: none;
  }
</style>
<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import Nav from './components/Nav'
export default {
  data () {
    return {}
  },
  components: {
    Nav
  },
  computed: {}
}
</script>
