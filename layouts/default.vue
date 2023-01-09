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

import SideBar from './SideBar.vue';
import LayoutFooter from './Footer.vue';
import TopBar from './TopBar.vue';
export default {
  name: "DefaultLayout",
  components: { SideBar, LayoutFooter, TopBar }
}
</script>

<style>

</style>
