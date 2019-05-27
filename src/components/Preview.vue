<template>
  <div>
    <Row>
      <Col span="8" offset="8">
        <div class="title">{{title}}</div>
      </Col>
      <Col span="8" offset="8">
        <div class="img">
          <img :src=img  width="100%">
        </div>
      </Col>
      <Col span="8" offset="8">
        <div class="time" style="font-size: 1.5rem">
          <div>活动时间：
            <div>
              {{time}}
          </div>
          </div>
        </div>
      </Col>
      <Col span="8" offset="8">
        <div class="content">
          <div>
            <span>活动介绍：</span>
            <div style="font-size: 1.5rem;text-indent: 3rem">
              {{content}}
            </div>
          </div>
        </div>
      </Col>
      <Col span="8" offset="8">
        <div style="text-align: center;" >
          <Button  @click="back" type="primary" style="width: 10rem;margin-bottom: 3rem;margin-top: 3rem">返回</Button>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: ['show'],
  data () {
    return {
      title: '毕业典礼',
      img: require('@/assets/1.jpg'),
      time: '2019-5-27 09:00:00 - 2019-5-27 10:00:00',
      content: '北京国际消费电子博览会，简称“3E”，是由振威展览股份、中国电子企业协会共同主办的消费电子展，业已成为消费电子领域的年度盛会。博览会围绕“科技生活产品交易（Electronic）、互动娱乐体验（Entertainment）和创意产业孵化（Economic）”三大主题，汇聚了包括亚马逊、华为、海康威视、京东、科大讯飞在内来自全球10余个国家和地区的260 多家知名企业参展。全面展示人工智能和消费电子领域科技产业的发展现状，旨在通过产品体验、娱乐互动、创意再造，为广大行业采购商、代理商、技术开发人员、投资孵化机构及消费者打造一站式投资、采购、合作、娱乐、消费平台。'
    }
  },
  methods: {
    back () {
      this.$emit('getMessage', 'false')
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
    margin-top: 1rem;
    font-size: 4rem;
  }
  .content{
    font-size: 1.5rem;
  }
</style>
