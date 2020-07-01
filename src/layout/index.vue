<template>
  <div class="c-layout-container">
    <!-- header -->
    <c-header></c-header>
    <!-- main -->
    <c-main></c-main>
    <!-- drawer -->
    <c-drawer></c-drawer>
  </div>
</template>

<script lang="ts">
import { cMain, cHeader, cDrawer } from "./components";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { cMain, cHeader, cDrawer }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped></style>
