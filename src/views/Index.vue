<style scoped>
  .childWrap{
    padding: 2rem 4rem;
  }
</style>
<template>
  <div>
    <Menu mode="horizontal" theme="light" active-name="1" @on-select="change">
      <MenuItem name="1">
        <Icon type="ios-paper" />
        活动报名
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-paper" />
        我的活动
      </MenuItem>
    </Menu>
    <div class="childWrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

export default {
  data () {
    return {}
  },
  methods: {
    change (name) {
      switch (name) {
        case '1': {
          this.$router.push({ name: 'signUp' })
          break
        }
        case '2': {
          this.$router.push({ name: 'myActivity' })
          break
        }
      }
    }
  },
  computed: {}
}
</script>
