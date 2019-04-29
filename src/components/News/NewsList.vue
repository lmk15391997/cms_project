<template>
  <div class="tmp1">
    <nav-bar title="新闻列表"/>
    <div class="demo">
      <ul>
        <li v-for='(news,index) in newsList' :key="index">
          <a href="#">
            <img class="" :src="news.picUrl" >
            <div>
              <span>{{news.title}}</span>
              <div class="news-desc"></div>
              <p>点击数：2 </p>
              <p>时间：{{news.ctime}}</p>
            </div>
          </a>
        </li>
        <span class="line"></span>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     newsList:[]
    }
  },
  created(){
    this.$axios.get('wxnew/?&key=63e51670fa2212db538d0560c5e5b584&num=20')
    .then(res=>{
     this.newsList=res.data.newslist; 
     console.log(res.data.newslist)
    })
    .catch( err => console.log('新闻列表异常',err))
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
