<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TopBar />
        <Nuxt />
      </div>
      <TheFooter />
    </div>
  </div>
</template>
<script>

import SideBar from './SideBar.vue';
import TheFooter from './Footer.vue';
import TopBar from './TopBar.vue';
export default {
  name: "DefaultLayout",
  components: { SideBar, TheFooter, TopBar }
}
</script>

<style>

</style>
