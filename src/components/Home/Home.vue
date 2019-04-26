<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.picUrl">
      </mt-swipe-item>
    </mt-swipe>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <a href="">
            <span :class="grid.className"></span>
            <span>{{grid.title}}</span>
          </a>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs:[],//轮播图数据
      grids:[
        {className:'cms-news',title:'新闻资讯'},
        {className:'cms-photo',title:'图文分享'},
        {className:'cms-photo',title:'商品展示'},
        {className:'cms-news',title:'留言反馈'},
        {className:'cms-photo',title:'搜索资讯'},
        {className:'cms-photo',title:'联系我们'},
        ]
    }
  },
  //created创建组件的生命周期函数中，可以操作函数
  created(){
    this.$axios.post('?&key=63e51670fa2212db538d0560c5e5b584&num=10')
    .then(res=>{
      //  res.data.message=[{img:'图片地址'}] 
      this.imgs = res.data.newslist;
      console.log(this.imgs)
    })
    .catch(err=>console.log('轮播图获取异常'))
  }
};
</script>
<style scoped>
.mint-swipe{
height: 200px;
}
img{
  width: 100%;
}
/*九宫格样式*/
.grid ul{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.grid li{
  list-style: none;
  float:left;
  width: 33.3%;
  text-align: center;
  height: 100px;
  line-height: 100px;
}
.cms-news{
  background-image: url(../../assets/img/news.png);
  background-repeat: round;
  height: 50px;
  width:50px;
  display: inline-block;
}
.cms-photo{
  background-image: url(../../assets/img/picShare.png);
  background-repeat: round;
  height: 50px;
  width:50px;
  display: inline-block;
}
</style>
