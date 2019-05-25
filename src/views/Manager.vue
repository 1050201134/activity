<template>
  <div class="layout">
    <Layout>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu mode="vertical" theme="light" active-name="1" width="auto" @on-select="change" >
            <MenuItem name="1" >
              <Icon type="ios-people" />
              报名人员管理管理
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-paper" />
                活动设置
              </template>
              <MenuItem name="2-1">活动设置</MenuItem>
              <MenuItem name="2-2">报名表单</MenuItem>
              <MenuItem name="2-3">活动详细</MenuItem>
            </Submenu>
            <MenuItem name="3" >
              <Icon type="ios-paper" />
              活动报名
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
        case '2-1': {
          this.$router.push({ name: 'addActivity2' })
          break
        }
        case '3': {
          this.$router.push({ name: 'index' })
          break
        }
        case '2-2': {
          this.$router.push({ name: 'signUpInfo' })
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
