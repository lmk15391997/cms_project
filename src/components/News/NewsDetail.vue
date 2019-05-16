<template>
  <div class="tmp1">
    <nav-bar title="新闻标题"/>
    <div class="news-title">
      <p>{{newsDetail.title}}</p>
      <span>新闻来源:{{newsDetail.description}}</span>
      <span>添加时间:{{newsDetail.ctime}}</span>
    <div class="news-content" v-html="newsDetail.url">aaa</div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsDetail:{//新闻详情

      }
    }
  },
  created(){
    //获取路由查询字符串参数id
    let id =this.$route.query.id;
    this.$axios.get('wxnew/?&key=63e51670fa2212db538d0560c5e5b584&num=20')
    .then( res => {
      this.newsDetail=res.data.newslist[id]
    })
    .catch( err =>console.log(err))
  }
};
</script>
<style scoped>
.demo a{
  display: block;
  width: 100%;
  height: 44px;
  color: #000;
  padding: 10px 0;
}
.demo img{
  float: left;
  width: 42px;
  height: 42px;
  margin-right: 20px;
}
.demo a div{
  float: left;
}
.demo span{
  display: block;
  width: 300px;
  font-size: 17px;
  line-height: 21px;
  /* overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap; */
}
.demo a p{
  float: left;
  color: #0bb0f5;
  font-size: 14px;
  line-height: 21px;
}
.demo p:nth-child(2){
  float:right;
}
.cms-s-header{
  background-color: #f7f7f7;
}
.demo ul{
  padding-left: 10px;
}
.line{
  margin-left:16px;
  transform: scaleY(.5);
  border-bottom: 1px solid #c8c7cc;
}
</style>
