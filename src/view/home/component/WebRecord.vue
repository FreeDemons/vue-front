<template>
  <div class="web-record">
    <p>
      <a class="record"
         target="_blank"
         href="http://beian.miit.gov.cn">粤ICP备18069881号-1</a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'webrecord'
}
</script>
<style scoped>
a,
a:link,
a:visited,
a:focus {
  text-decoration: none;
  color: #000;
}
.web-record {
  text-align: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
  color: rgba(0, 0, 0, 0.4);
}
.web-record .record {
  color: rgba(0, 0, 0, 0.4);
  position: relative;
}
.web-record .record::after {
  content: "";
  display: block;
  /*开始时候下划线的宽度为0*/
  width: 0;
  height: 1px;
  position: absolute;
  left: 0;
  bottom: -10px;
  background: rgba(0, 0, 0, 0.9);
  /*这里我们设定所有改变都有动画效果，可以自己指定样式才有动画效果*/
  transition: all 0.3s ease-in-out;
}
.web-record .record:hover {
  color: rgba(0, 0, 0, 0.9);
}
.web-record .record:hover::after {
  width: 100%;
}
</style>