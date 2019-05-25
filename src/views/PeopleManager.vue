<template>
  <div>
    <div style="background:#eee;text-align: left">
      <h1 style="background-color: white">报名人员管理</h1>
      <Card>
        <Button type="primary"  @click="modal1 = true" >添加</Button>
        <Dropdown style="float: right">
          <a href="javascript:void(0)">
            操作
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list" >
            <DropdownItem>群发消息</DropdownItem>
            <DropdownItem>导入</DropdownItem>
            <DropdownItem>导出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Input search enter-button="Search" placeholder="Enter something..." style="width: 15rem;"/>
        <div style="margin-top: 1rem">
          <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        </div>
      </Card>
      <Modal
        v-model="modal1"
        title="添加人员"
        @on-ok="ok">
        <Tabs value="name1">
          <TabPane label="校内" name="name1">
            <Form ref="formInline" :model="formInline" :rules="ruleInline"  :label-width="80">
              <FormItem prop="user" label="学号">
                <Input type="text" v-model="formInline.user" placeholder="请输入学号或者工号"></Input>
              </FormItem>
            </Form>
          </TabPane>
          <TabPane label="校外" name="name2">
            <Form ref="formInline" :model="formInline" :rules="ruleInline"  :label-width="80">
              <FormItem prop="user" label="姓名">
                <Input type="text" v-model="formInline.user" placeholder=""></Input>
              </FormItem>
              <FormItem prop="user" label="手机号码">
                <Input type="text" v-model="formInline.user" placeholder=""></Input>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>

      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeopleManager',
  data () {
    return {
      modal1: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      },
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '手机',
          key: 'age'
        },
        {
          title: '凭证号',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '审核'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18858475933,
          address: '1245-1062-8959',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 18858475933,
          address: '1245-1062-8959',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 18858475933,
          address: '1245-1062-8959',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 18858475933,
          address: '1245-1062-8959',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    },
    ok () {
      this.$Message.info('添加成功')
    }
  }
}
</script>

<style scoped>

</style>
