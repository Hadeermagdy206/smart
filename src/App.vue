
<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

