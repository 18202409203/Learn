<template>
  <section class="c-main-container">
    <!-- main content -->
    <transition mode="out-in" name="fade-transform">
      <router-view style="min-height: 80vh;" />
    </transition>
    <!-- footer -->
    <footer class="c-footer-copyright">
      Copyright © {{ fullYear }} {{ copyright }}
    </footer>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { copyright } from "@/config";

@Component({
  name: "cMain"
})
export default class CMain extends Vue {
  copyright = copyright;
  fullYear = new Date().getFullYear();
}
</script>

<style lang="scss" scoped>
.c-main-container {
  position: relative;
  overflow: hidden;
  padding: 0 5vw;

  .c-footer-copyright {
    text-align: center;
    font-size: $base-font-size-sm;
  }
}
</style>
