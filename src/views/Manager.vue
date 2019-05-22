<template>
  <div class="layout">
    <Layout>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu mode="vertical" theme="dark" active-name="1" width="auto" @on-select="change" >
            <MenuItem name="1" >
              <Icon type="ios-people" />
              报名人员管理管理
            </MenuItem>
            <MenuItem name="2" >
              <Icon type="ios-construct" />
              活动设置
            </MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px',background: '#fff'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Manager',
  methods: {
    change (name) {
      switch (name) {
        case '1': {
          this.$router.push({ name: 'peopleManager' })
          break
        }
      }
    }
  }
}

</script>

<style scoped>
  .layout{
    /*border: 1px solid #d7dde4;*/
    background: #f5f7f9;
    position: relative;
    /*border-radius: 4px;*/
    overflow: hidden;
  }

</style>
