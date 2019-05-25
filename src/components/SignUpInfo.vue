<style scoped>
</style>
<template>
    <div>
      <Row>
        <Col span="6" offset="1">
          <Tabs value="name1" style="height: 40rem">
            <TabPane label="添加字段" name="name1">
              <Button v-for="(tag,index) in tags" :key="index" style="height: 40px;margin-right: 10px">{{tag.name}}</Button>
            </TabPane>
            <TabPane label="字段设置" name="name2">
              <Form>
               <FormItem label="字段名称" style="display: flex">
                 <Input v-model="name" />
               </FormItem>
                <FormItem label="字段类型">
                  <Select v-model="type" style="width:200px">
                    <Option v-for="(tag,index) in tags" :key="index" :value="tag.name">{{ tag.name }}</Option>
                  </Select>
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>
        </Col>
        <Col span="10" offset="2">
          <h1 style="text-align: center;margin-bottom: 3rem">报名表单</h1>
          <Form>
            <Card>
              <Button shape="circle" icon="ios-close" slot="extra">
              </Button>
              <FormItem label="奖励">
                <RadioGroup>
                  <Radio label="apple">
                    <span>工时</span>
                  </Radio>
                  <Radio label="android">
                    <span>素拓分</span>
                  </Radio>
                </RadioGroup>
              </FormItem>
            </Card>
            <Card>
              <Button shape="circle" icon="ios-close" slot="extra">
              </Button>
            <FormItem label="简介">
              <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."/>
            </FormItem>
            </Card>
          </Form>
        </Col>
      </Row>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      name: '奖励',
      type: '单行文本',
      cardIndex: '1',
      tags: [
        {
          name: '单行文本'
        },
        {
          name: '多行文本'
        },
        {
          name: '单选选项'
        },
        {
          name: '多选选项'
        },
        {
          name: '下拉菜单'
        },
        {
          name: '日期选择'
        },
        {
          name: '上传图片'
        }
      ]
    }
  },
  methods: {
  },
  computed: {}
}
</script>
