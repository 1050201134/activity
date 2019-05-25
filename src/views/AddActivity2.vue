<template>
  <div>
    <div>
      <h1 style="padding: 2rem 0;padding-left: 2rem;background-color: white">创建活动</h1>
    </div>
    <div style="width: 30rem;padding-left: 2rem">
      <Form :model="formItem" :label-width="120" label-position="left">
        <FormItem label="活动类型">
          <Select v-model="formItem.select">
            <Option value="beijing">讲座</Option>
            <Option value="shanghai">开学典礼</Option>
            <Option value="shenzhen">毕业典礼</Option>
          </Select>
        </FormItem>
        <FormItem label="活动名称">
          <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="活动描述">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="活动开始日期">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
        </FormItem>
        <FormItem label="活动结束日期">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
        </FormItem>
        <FormItem label="报名开始日期">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
        </FormItem>
        <FormItem label="报名结束日期">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
        </FormItem>
        <FormItem label="需报名审核">
          <Checkbox ></Checkbox>
        </FormItem>
        <FormItem label="是否公开报名">
          <RadioGroup v-model="formItem.radio">
            <Radio label="male">公开报名</Radio>
            <Radio label="female">不公开报名</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="报名人数限制"  >
          <div style="display: flex">
            <Checkbox label="true" v-model="formItem.limit"></Checkbox>
            <Input v-if="formItem.limit" v-model="formItem.input" placeholder="Enter something..." ></Input>
          </div>
        </FormItem>
        <FormItem label="白名单">
          <Tree :data="data2" show-checkbox ></Tree>
        </FormItem>
        <FormItem label="黑名单">
          <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary">保存</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddActivity',
  data () {
    return {
      data2: [
        {
          title: '学院',
          expand: false,
          children: [
            {
              title: '大数据与软件工程学院',
              expand: true,
              children: [
                {
                  title: '软件工程'
                },
                {
                  title: '计算机'
                }
              ]
            },
            {
              title: '商学院',
              expand: true,
              children: [
                {
                  title: '会计'
                },
                {
                  title: '金融'
                }
              ]
            }
          ]
        }
      ],
      formItem: {
        input: '',
        select: '',
        radio: false,
        limit: false,
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
