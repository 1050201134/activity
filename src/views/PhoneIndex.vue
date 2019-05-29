<template>
    <div>
      <van-panel v-for = "(item, index) in message" :key="index" @click="show">
        <div style="padding: 1rem">
          <img :src=item.img  width="100%">
          <div>
            <span class="title">{{item.title}}</span>
            <div>
              <span class="time">{{item.time}}</span>
              <div>
                <span class="people">{{item.people}}已报名</span>
              </div>
            </div>
          </div>
        </div>
      </van-panel>
    </div>
</template>

<script>
import { Tab, Tabs, Panel, Button, Cell, CellGroup, Row, Col } from 'vant'
export default {
  name: 'PhoneIndex',
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Panel.name]: Panel,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  methods: {
    show () {
      this.$router.push({ name: 'activity' })
    }
  },
  data () {
    return {
      message: [
        {
          title: '毕业典礼',
          time: '2019-05-05 08:00 -  09:00',
          people: '120',
          img: require('@/assets/1.jpg')
        },
        {
          title: '毕业典礼',
          time: '2019-05-05 08:00 -  09:00',
          people: '120',
          img: require('@/assets/1.jpg')
        },
        {
          title: '毕业典礼',
          time: '2019-05-05 08:00 -  09:00',
          people: '120',
          img: require('@/assets/1.jpg')
        },
        {
          title: '毕业典礼',
          time: '2019-05-05 08:00 -  09:00',
          people: '200',
          img: require('@/assets/1.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 1.2rem;
}
  .time{
    font-size: 1rem;
    color: gray;
  }
  .people{
    color: orange;
    font-size: 1rem;
    float: right;
  }
</style>
