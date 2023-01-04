<template>
  <div class="container-fluid">

  </div>
</template>

<script lang="ts">
import BButtonLoading from '~/components/BButtonLoading.vue';


export default {
  name: "IndexPage",
  middleware: 'auth',
  components: { BButtonLoading }
}
</script>
