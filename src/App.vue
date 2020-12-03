<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: 'App',

  //注册组件
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
