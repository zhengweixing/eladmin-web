<!--suppress ALL -->
<template>
  <div v-if="ads.length > 0" id="adbox">
    <ul id="adbox-ul" :class="{anim:animate==true}">
      <li v-for="ad in ads" :key="ad.title">
        <a :href="ad.url" target="_blank">{{ ad.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Adbox',
  props: {
    ads: {
      type: Array,
      default: function() {
        return [
          { title: '艾里克物联网平台版本已发布！', url: '#' },
          { title: '艾里克组态功能已经新增！', url: '#' },
          { title: '艾里克7*24小时客服在线！', url: '#' }
        ]
      }
    }
  },
  data() {
    return {
      animate: false
    }
  },
  created() {
    setInterval(this.scroll, 5000)
  },
  methods: {
    scroll() {
      this.animate = true
      setTimeout(() => {
        this.ads.push(this.ads[0])
        this.ads.shift()
        this.animate = false
      }, 500)
    }
  }
}
</script>

<style scoped>
  #adbox{
    height: 30px;
    font-size: 13px;
    overflow: hidden;
    color: silver;
    text-align: center;
    background: rgba(0, 0, 0, 0.34);
  }
  .anim {
    transition: all 1s;
    margin-top: -30px;
  }
  #adbox-ul, #adbox-ul li {
    padding:0px;
    margin: 0px;
  }
  #adbox-ul a:hover{
    color:red;
  }
  #adbox-ul li{
    list-style: none;
    line-height: 30px;
    height: 30px;
  }
</style>
