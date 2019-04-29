<template>
  <div class="tmp1">
    <div class="cms-s-header">
      <h1 @click="goback"> ← </h1>
      <h1 class="page-title">{{title}}</h1>
    </div>
  </div>
</template>
<script>
export default {
name:'nav-bar',
props:['title'],
methods:{
    goback(){
        this.$router.go(-1);
    }
 }
};
</script>
<style scoped>
.cms-s-header{
  background-color: #f7f7f7;
}
.demo ul{
  padding-left: 10px;
}
.tmp1 h1{
  display: inline-block;
  height: 20px;
  line-height: 20px;
}
.page-title{
  margin-left: 25%;
}

</style>
