<style scoped>
</style>
<template>
    <div>
      <div style="display: flex">
        <Dropdown @on-click="selectType">
          <Button type="primary">
            {{activityType}}
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu trigger="click" slot="list">
            <DropdownItem name="所有活动">所有活动</DropdownItem>
            <DropdownItem name="社团活动">社团活动</DropdownItem>
            <DropdownItem name="学术研究">学术研究</DropdownItem>
            <DropdownItem name="讲座">讲座</DropdownItem>
            <DropdownItem name="留学">留学</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button type="primary" style="margin-left: 2rem" @click="addActivity">创建活动</Button>
        <Input search enter-button="Search" placeholder="Enter something..." style="width: 15rem;margin-left: 5rem"/>
      </div>
      <div style="margin-top: 2rem">
        <div style="height: 45rem">
          <Table border :columns="columns" :data="data"></Table>
        </div>
        <div style="text-align: center;margin-top: 4rem">
          <Page :total="100" show-elevator />
        </div>
      </div>
      <Modal v-model="isShow">
        <p slot="header" style="text-align:center">
          <span>羽毛球练习</span>
        </p>
        <Form :label-width="80">
          <FormItem v-for="(activityInfo,index) in activityInfos" :key="index" :label="activityInfo.key">
            {{activityInfo.value}}
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" size="large" long @click="infoToSignUp">报名</Button>
        </div>
      </Modal>
      <Modal v-model="isSignUp">
        <p slot="header" style="text-align:center">
          <span>羽毛球练习</span>
        </p>
        <Form :model="formItem" :label-width="80">
          <FormItem label="奖励">
            <RadioGroup v-model="formItem.reward">
              <Radio label="素拓分">数据湖</Radio>
              <Radio label="素拓分">素拓分</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="报名理由">
            <Input v-model="formItem.reason"
                   type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."/>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" size="large" long >报名</Button>
        </div>
      </Modal>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      activityInfos: [
        {
          key: '教练',
          value: '马龙'
        },
        {
          key: '简介',
          value: '这是一次羽毛球练习'
        }
      ],
      formItem: {
        reward: '',
        reason: ''
      },
      isShow: false,
      isSignUp: false,
      activityType: '所有活动',
      columns: [
        {
          title: '活动名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '活动类型',
          key: 'type',
          align: 'center'
        },
        {
          title: '开始时间',
          key: 'time',
          align: 'center'
        },
        {
          title: '最大报名人数',
          key: 'maxNumber',
          align: 'center'
        },
        {
          title: '是否需要审核',
          key: 'needConfirm',
          align: 'center',
          render: (h, params) => {
            return h('div', params.row.needConfirm === 1 ? '是' : '否')
          }
        },
        {
          title: '操作',
          key: 'id',
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
                    this.showInfo()
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.signUp()
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data: [
        {
          name: '羽毛球练习',
          type: '社团活动',
          time: '2019-5-22 16:00:00',
          maxNumber: '10',
          needConfirm: 1,
          id: '1'
        },
        {
          name: '羽毛球练习',
          type: '社团活动',
          time: '2019-5-22 16:00:00',
          maxNumber: '10',
          needConfirm: '1',
          id: '1'
        },
        {
          name: '羽毛球练习',
          type: '社团活动',
          time: '2019-5-22 16:00:00',
          maxNumber: '10',
          needConfirm: '1',
          id: '1'
        },
        {
          name: '羽毛球练习',
          type: '社团活动',
          time: '2019-5-22 16:00:00',
          maxNumber: '10',
          needConfirm: '1',
          id: '1'
        }
      ]
    }
  },
  methods: {
    selectType (name) {
      this.activityType = name
    },
    signUp () {
      this.isSignUp = true
    },
    showInfo () {
      this.$router.push({ name: 'peopleManager' })
    },
    infoToSignUp () {
      this.isShow = false
      this.isSignUp = true
    },
    addActivity () {
      this.$router.push({ name: 'addActivity' })
    }
  },
  computed: {
  }
}
</script>
