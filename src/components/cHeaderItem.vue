<template>
  <div class="c-header-item-container">
    <div class="c-header-item header-text">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CHeaderItem extends Vue {}
</script>

<style lang="scss" scoped>
.c-header-item-container {
  float: right;
  padding: 0 $base-padding;
  cursor: pointer;

  .c-header-item {
    line-height: $base-header-height;
  }
}

.c-header-item-container:hover {
  background: $base-header-background-hover;
}
</style>
