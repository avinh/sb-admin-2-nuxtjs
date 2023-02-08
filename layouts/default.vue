<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar />
        <div class="container-fluid">
          <Nuxt />
        </div>
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
<script>

import SideBar from '../components/SideBar.vue';
import LayoutFooter from '../components/Footer.vue';
import TopBar from '../components/TopBar.vue';
export default {
  name: "DefaultLayout",
  components: { SideBar, LayoutFooter, TopBar }
}
</script>

<style>

</style>
